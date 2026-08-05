"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SquarePen, X } from "lucide-react";
import ImageCropper from "./ImageCropper";
import { supabase } from "../../utils/supabase/client";
import { getCroppedImg } from "@/app/utils/helpers/cropImage";

const UserDetails = ({ username }) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) return;
      setUserId(user.id);

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("profile")
        .eq("id", user.id)
        .single();

      if (!profileError && data?.profile) {
        setPreview(data.profile);
      }
    };

    fetchProfile();
  }, []);

  const handleProfile = () => {
    setOpenModal(true);
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const dataURLtoFile = (dataUrl, fileName) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  const handleUpload = async () => {
    if (!image || !croppedAreaPixels || !userId) return;
    setLoading(true);
    setError("");

    try {
      const croppedDataUrl = await getCroppedImg(image, croppedAreaPixels);
      const file = dataURLtoFile(croppedDataUrl, `${userId}-${Date.now()}.jpg`);
      const filePath = `profile_images/${userId}-${Date.now()}.jpg`;

      const { error: uploadError } = await supabase.storage
        .from("profile_images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData, error: publicError } = supabase.storage
        .from("profile_images")
        .getPublicUrl(filePath);

      if (publicError) throw publicError;
      const profileUrl = publicUrlData.publicUrl;

      const { error: updateError } = await supabase
        .from("profiles")
        .update({ profile: profileUrl })
        .eq("id", userId);

      if (updateError) throw updateError;

      setPreview(profileUrl);
      setOpenModal(false);
      setImage(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    } catch (err) {
      setError(err?.message || "حدث خطأ أثناء حفظ الصورة");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    setError("");
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative cursor-pointer" onClick={handleProfile}>
        <img
          src={preview ?? preview?.profile}
          alt="profile"
          className="rounded-full size-24 object-cover"
        />
        <SquarePen className="absolute bottom-0 right-0 size-4 bg-ieee-primary rounded-full p-2 box-content" />
      </div>

      <div className="pt-4 text-xl">
        <h2>{username}</h2>
        <p className="text-ieee-primary font-bold">IEEE User</p>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 p-6 shadow-2xl">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-slate-800 p-2 text-gray-300 hover:bg-slate-700"
              onClick={handleClose}
            >
              <X className="size-4" />
            </button>

            <h3 className="mb-4 text-xl font-semibold">
              Upload and Crop Profile Image
            </h3>
            <div className="mt-6">
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />

              {!image ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-slate-950/60 px-6 py-10 text-center">
                  <p className="mb-3 text-gray-300">Max image upload size is 1MB</p>
                  <button
                    type="button"
                    className="rounded-full bg-ieee-primary px-5 py-2 text-sm font-semibold text-white hover:bg-ieee-primary/90"
                    onClick={() => inputRef.current?.click()}
                  >
                    Choose Image
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageCropper
                    image={image}
                    crop={crop}
                    setCrop={setCrop}
                    zoom={zoom}
                    setZoom={setZoom}
                    onCropComplete={onCropComplete}
                  />

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      className="rounded-full bg-ieee-primary px-4 py-2 text-sm font-semibold text-white hover:bg-ieee-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                      onClick={handleUpload}
                      disabled={loading}
                    >
                      {loading ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
