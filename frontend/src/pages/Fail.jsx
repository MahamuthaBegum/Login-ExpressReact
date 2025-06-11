import React from 'react'

const Fail = () => {
return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-pink-200">
            <h1 className="text-4xl font-extrabold text-red-700 mb-3 drop-shadow">
                Login Failed
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
                The email or password you entered doesn’t match our records.
            </p>
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg mb-6 border border-red-200">
                <p>Please double-check your credentials and try again.</p>
            </div>
            <a
                href="/"
                className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white font-bold py-2 px-8 rounded-full shadow-lg transition duration-200"
            >
                Go Back to Login
            </a>
        </div>
    </div>
)
}

export default Fail