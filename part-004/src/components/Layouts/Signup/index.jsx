import Title from '../.././Fragments/Title/index.jsx'
import FormSignup from '../.././Fragments/FormSignup/index.jsx'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="w-full max-w-xs">
      <Title footnotes="Welcome, please enter your detail">Register</Title>
      <FormSignup/>
      <p className="text-slate-400 mt-5">Already have account? <Link to="/login" className="text-blue-600 font-semibold">Login</Link></p>
    </div>
  )
}

export default Signup;