const Title = ({children, footnotes}) => {
  return (
    <>
      <h1 className="text-slate-300 text-3xl font-bold mb-2">{children}</h1>
      <p className="font-medium text-slate-400 mb-6">{footnotes}</p>
    </>
  )
}

export default Title;