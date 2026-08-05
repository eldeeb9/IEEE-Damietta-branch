import React from "react";
import Cropper from "react-easy-crop";

const ImageCropper = ({
  image,
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropComplete,
}) => {
  if (!image) return null;

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[360px] rounded-3xl overflow-hidden bg-slate-900">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-300">Zoom</label>
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ImageCropper;
