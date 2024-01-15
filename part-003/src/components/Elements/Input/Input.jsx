const Input = ({inputType, inputPlaceholder}) => {
  return (
    <input
     type={inputType}
     className="text-sm border rounded w-full py-2 px-3 text-slate-300 bg-slate-900 placeholder:opacity-50"
     placeholder={inputPlaceholder}
    />
  )
}

export default Input;