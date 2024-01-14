import React from 'react'
class Button extends React.Component {
  render () {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-white text-black font-mono" type="submit">
          Hello
      </button>
    )
  }
}
const Foot = ({colors, children}) => {
  return (
    <p className={`${colors ? colors : "text-white"} mt-3 font-bold font-mono text-3xl`}>{children ? children : "world"}</p>
  )
}
function App() {
  return (
    <>
      <div className="min-h-screen bg-black items-center flex justify-center flex-col">
        <Button/>
        <Foot>hello</Foot>
        <Foot colors="text-red-700"></Foot>
      </div>
    </>
  )
}

export default App
