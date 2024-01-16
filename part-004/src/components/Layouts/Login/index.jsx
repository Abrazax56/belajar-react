import Title from '../.././Fragments/Title/index.jsx'
import FormLogin from '../.././Fragments/FormLogin/index.jsx'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full max-w-xs">
      <Title footnotes="Welcome, please enter your detail">Log in</Title>
      <FormLogin/>
      <p className="text-slate-400 mt-5">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Register</Link></p>
    </div>
  )
}

export default Login;