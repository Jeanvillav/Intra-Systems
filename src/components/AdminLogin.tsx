"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/actions/auth";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const res = await loginAdmin(password);
    if (res.success) {
      window.location.reload();
    } else {
      setError(res.error || "Login failed");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
        <h1 className="text-3xl font-serif text-[#141B4D] mb-6 text-center">Admin Access</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#141B4D] focus:border-transparent outline-none"
              placeholder="Enter admin password"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#141B4D] text-white py-3 rounded-md font-medium hover:bg-[#1a2366] transition-colors disabled:opacity-70 mt-2"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
