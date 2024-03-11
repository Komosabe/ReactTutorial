export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClassess = "w-full px-3 py-2 leading-tight  border rounded shadow ";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClassess += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-400";
    inputClassess += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <labe className={labelClasses}>{label}</labe>
      <input className={inputClassess} {...props} />
    </p>
  );
}
