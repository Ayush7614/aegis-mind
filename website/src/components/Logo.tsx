export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00ff9c" />
          <stop offset="0.5" stopColor="#2de2ff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M24 3 6 10v12c0 11 7.6 19.4 18 23 10.4-3.6 18-12 18-23V10L24 3Z"
        stroke="url(#ag)"
        strokeWidth="2.4"
        fill="rgba(0,255,156,0.06)"
      />
      <path
        d="M24 13v22M24 13c-4 3-7 4-9 4 0 7 3 11 9 14M24 13c4 3 7 4 9 4 0 7-3 11-9 14"
        stroke="url(#ag)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="23" r="3" fill="#00ff9c" />
    </svg>
  );
}
