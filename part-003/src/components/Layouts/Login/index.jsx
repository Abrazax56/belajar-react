import Title from '../.././Fragments/Title/index.jsx'
import FormLogin from '../.././Fragments/FormLogin/index.jsx'

const Login = () => {
  return (
    <div className="w-full max-w-xs">
      <Title footnotes="Welcome, please enter your detail">Log in</Title>
      <FormLogin/>
    </div>
  )
}

export default Login;