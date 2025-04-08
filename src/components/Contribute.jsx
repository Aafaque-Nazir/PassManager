import React from 'react';

function Contribute() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-10">
        <h1 className="text-4xl font-bold text-center text-black animate-bounce">
          🧠 Contribute to PassMan
        </h1>

        {/* UNREAL Button */}
        <a
          href="https://github.com/Aafaque-Nazir/PassManager"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-4 rounded-full text-white text-xl font-bold tracking-wide bg-purple-600 shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-purple-500/50 animate-[pulseGlow_4s_ease-in-out_infinite]
          overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 group-hover:animate-spin-slow"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.261.793-.579 0-.286-.01-1.04-.016-2.042-3.338.725-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.76-1.604-2.665-.305-5.467-1.333-5.467-5.932 0-1.31.469-2.382 1.236-3.22-.124-.304-.535-1.53.117-3.19 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.006 0C17.42 4.243 18.43 4.566 18.43 4.566c.653 1.66.243 2.886.119 3.19.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.814 1.102.814 2.222 0 1.606-.015 2.9-.015 3.292 0 .321.19.694.8.577C20.565 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            GitHub
          </span>
          {/* Unreal animated background wave effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-xl opacity-30 animate-[wave_8s_linear_infinite] scale-[2]"></span>
        </a>
      </div>
    </>
  );
}

export default Contribute;
