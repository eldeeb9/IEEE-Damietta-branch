"use client"
import React, { useState } from "react";
import { Inbox, Mail } from "lucide-react";
import { User } from "lucide-react"
import { supabase } from "../../utils/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const PersonalInfo = ({ username, email }) => {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="max-w-[600px] m-auto bg-slate-800 rounded-2xl shadow py-4 px-6 mt-4 relative">
      <div className="flex items-center">
        <User className="bg-blue-500 rounded-full p-2 size-12" />
        <div className="pl-4">
          <p className="text-sm text-gray-400">Full Name</p>
          <h2>{username}</h2>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <Mail className="bg-blue-500 rounded-full p-2 size-12" />
        <div className="pl-4">
          <p className="text-sm text-gray-400">Email</p>
          <h2>{email}</h2>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button onClick={() => setShowConfirm(true)} variant="destructive">
          logout
        </Button>
      </div>

      {/* Overlay */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-2xl shadow-lg p-6 w-[90%] max-w-2xl text-center">
            <h3 className="text-lg font-semibold mb-2">Are you sure you want to logout?</h3>
            <p className="text-sm text-gray-400 mb-6">
            You'll need to sign in again to access your account.
            </p>
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowConfirm(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;