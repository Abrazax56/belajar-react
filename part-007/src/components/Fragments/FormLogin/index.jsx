import Inputs from '../.././Elements/Input/index.jsx'
import Button from '../.././Elements/Button/index.jsx'

const Form = () => {
  return (
    <form>
      <Inputs labelFor="email" labelText="Email" typeInput="email">e.g, ahmad@gmail.com</Inputs>
      <Inputs labelFor="password" labelText="Password" typeInput="password">********</Inputs>
      <Button bgColor="bg-slate-200" textColor="text-slate-900" otherClasses="w-full">Log In</Button>
    </form>
  )
}

export default Form;