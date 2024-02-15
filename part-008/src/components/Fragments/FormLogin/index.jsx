import Inputs from '../.././Elements/Input/index.jsx'
import Button from '../.././Elements/Button/index.jsx'
import login from '../../.././service/auth.service.js'
import { useRef, useEffect, useState } from "react"

export default () => {
  const [loginFailed, setLoginFailed] = useState("");
  const HandleSubmit = e => {
    e.preventDefault();
    alert('clicked')
    /*login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res)
        window.location.href = '/nested'
      } else {
        setLoginFailed(res.response.data);
      }
    });*/
  }
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus();
  }, [])
  return (
    <form onSubmit={HandleSubmit}>
      {/*{loginFailed && */}<p className="text-red-500">anu{/*loginFailed*/}</p>{/*}*/}
      <Inputs labelFor="username" labelText="Username" typeInput="username" ref={usernameRef}>e.g,, JohnDoe23</Inputs>
      <Inputs labelFor="password" labelText="Password" typeInput="password">********</Inputs>
      <Button bgColor="bg-slate-200" textColor="text-slate-900" otherClasses="w-full">Log In</Button>
    </form>
  )
}

