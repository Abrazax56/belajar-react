import { forwardRef } from "react";
const Input = forwardRef(({inputType, inputPlaceholder, ID, names}, ref) => {
  return (
    <input
     type={inputType}
     className="text-sm border rounded w-full py-2 px-3 text-slate-300 bg-slate-900 placeholder:opacity-50"
     placeholder={inputPlaceholder}
     id={ID}
     name={names}
     ref={ref}
    />
  )
})

export default Input;