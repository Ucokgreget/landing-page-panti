"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/assets/logo/logo";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="bg-clay-surface text-clay-on-surface min-h-screen flex flex-col">
      {/* Main Canvas */}
      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-5">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-clay-teal-light/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-clay-mint/30 rounded-full blur-[100px] -z-10" />

        {/* Login Container */}
        <div className="w-full max-w-[480px] py-6">
          <div className="clay-card-login p-5 md:p-12 flex flex-col">
            {/* Brand/Logo Area */}
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="w-20 h-20 bg-clay-teal-light rounded-full flex items-center justify-center mb-6 shadow-[inset_2px_2px_4px_rgba(255,255,255,1),inset_-2px_-2px_4px_rgba(42,140,163,0.1)]">
                <span
                  className="material-symbols-outlined text-clay-primary text-[40px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_circle
                </span>
              </div>
              <h2 className="text-[32px] leading-[40px] font-extrabold tracking-[-0.02em] text-clay-on-surface mb-2">
                Selamat Datang Kembali
              </h2>
              <p className="text-clay-on-surface-variant">
                Silakan masuk ke akun rehabilitasi Anda
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="font-bold text-sm text-clay-on-surface-variant ml-4"
                  htmlFor="username"
                >
                  Nama Pengguna
                </label>
                <div className="relative">
                  <input
                    className="w-full clay-input bg-clay-surface-container-lowest rounded-full px-6 py-4 text-clay-on-surface placeholder:text-clay-outline-variant"
                    id="username"
                    placeholder="Masukkan nama pengguna"
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-clay-outline-variant">
                    person
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="font-bold text-sm text-clay-on-surface-variant ml-4"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    className="w-full clay-input bg-clay-surface-container-lowest rounded-full px-6 py-4 text-clay-on-surface placeholder:text-clay-outline-variant"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-clay-outline-variant">
                    lock
                  </span>
                </div>
              </div>

              <div className="flex justify-end px-2">
                <a
                  className="font-bold text-sm text-clay-secondary hover:text-clay-primary transition-colors"
                  href="#"
                >
                  Lupa Kata Sandi?
                </a>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <button
                  className="clay-button-primary w-full py-4 rounded-full font-bold text-2xl text-white flex items-center justify-center gap-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <span>Masuk</span>
                      <span className="material-symbols-outlined">login</span>
                    </>
                  )}
                </button>
                <Link
                  href="/"
                  className="clay-button-secondary w-full py-4 rounded-full font-bold text-sm text-clay-primary text-center hover:bg-clay-surface-container-low transition-colors active:scale-95 duration-200"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </form>

            {/* Helpful Footer Info */}
            <div className="mt-10 pt-8 border-t border-clay-outline-variant/20 text-center">
              <p className="text-xs font-semibold text-clay-on-surface-variant">
                Membutuhkan bantuan teknis? <br className="md:hidden" />
                <a className="text-clay-primary underline font-bold" href="#">
                  Hubungi Administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-clay-surface-container-low border-t border-clay-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-8 gap-6 max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-bold text-sm text-clay-on-surface">
              UPTD Panti Sosial Rehabilitasi Sensorik
            </span>
            <p className="text-xs font-semibold text-clay-secondary">
              &copy; 2024 UPTD Panti Sosial Rehabilitasi Sensorik. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              className="text-xs font-semibold text-clay-on-surface-variant hover:text-clay-primary transition-opacity duration-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-semibold text-clay-on-surface-variant hover:text-clay-primary transition-opacity duration-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-semibold text-clay-on-surface-variant hover:text-clay-primary transition-opacity duration-200"
              href="#"
            >
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
