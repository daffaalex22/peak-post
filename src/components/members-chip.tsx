export const MembersChip = () => {
  return (
    <button
      className="
      inline-flex h-5 ml-1
      animate-shimmer items-center 
      justify-center rounded-md border 
      border-slate-800 text-[75%]
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] px-1 font-medium 
      text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 
      focus:ring-offset-1 focus:ring-offset-slate-50
      "
      suppressHydrationWarning
    >
      Members Only
    </button>
  )
};