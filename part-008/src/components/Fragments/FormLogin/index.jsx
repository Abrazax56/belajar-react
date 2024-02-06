import Inputs from '../.././Elements/Input/index.jsx'
import Button from '../.././Elements/Button/index.jsx'

const Form = () => {
  const HandleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    alert("Email : " + e.target.email.value + "\nPassword : " + e.target.password.value)
    alert("success login")
    window.location.href = '/nested'
  }
  return (
    <form onSubmit={HandleSubmit}>
      <Inputs labelFor="email" labelText="Email" typeInput="email">e.g, ahmad@gmail.com</Inputs>
      <Inputs labelFor="password" labelText="Password" typeInput="password">********</Inputs>
      <Button bgColor="bg-slate-200" textColor="text-slate-900" otherClasses="w-full">Log In</Button>
    </form>
  )
}

export default Form;