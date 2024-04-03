export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-slate-600 text-stone-200 hover:bg-slate-800 hover:text-stone-400"
      {...props}
    >
      {children}
    </button>
  );
}
