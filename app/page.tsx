'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      {/* Background gradient accent */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Hi, I'm{' '}
              <span className="blue-gradient-text">Bihari Coder</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
              Building Real Projects. Sharing Coding Knowledge.
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
              I'm passionate about crafting elegant solutions to complex problems. Whether it's full-stack development, open-source contributions, or creating educational content, I love building things that matter. Let's create something amazing together.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mt-12">
            {/* YouTube Card */}
            <Link href="https://www.youtube.com/@biharicoder01" target="_blank" rel="noopener noreferrer">
              <div className="group glass-effect neon-border rounded-3xl p-8 cursor-pointer h-full flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">YouTube</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">Watch Coding Projects</p>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Instagram Card */}
            <Link href="https://www.instagram.com/bihari.coder/" target="_blank" rel="noopener noreferrer">
              <div className="group glass-effect neon-border rounded-3xl p-8 cursor-pointer h-full flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Instagram</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">Follow Coding Tips</p>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Bottom accent line */}
          <div className="mt-16 h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>
    </main>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>
  )
}
