import React from 'react'

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 flex items-center justify-center p-4">
      <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center relative overflow-hidden">
        <div className="flex justify-center mb-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" rx="12" fill="#E50914"/>
            <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="36" fontWeight="bold" fill="white" fontFamily="Arial">N</text>
          </svg>
        </div>
        <div className="flex justify-center mb-4">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="#22c55e" opacity="0.2"/>
            <path d="M16 25l6 6 10-12" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Netflix!</h1>
        <p className="text-gray-600 mb-6 text-lg">You’ve successfully logged in.</p>
        <p className="mb-6 text-gray-700">Get ready to stream your favorite shows and discover new ones!</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow transition">
          👉 Start Watching Now
        </button>
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-400 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </div>
  )
}

export default Success