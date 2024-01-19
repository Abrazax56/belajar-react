const Label = ({children, HTMLfor}) => {
  return (
    <label
      htmlFor={HTMLfor}
      className="block text-slate-600 text-sm font-bold mb-2"
    >{children}</label>
  )
}

export default Label;