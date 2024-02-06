import Title from '.././Fragments/Title/index.jsx'
import { Link } from 'react-router-dom'

const Auth = ({children, foot, type}) => {
  return (
    <div className="w-full max-w-xs">
      <Title footnotes="Welcome, please enter your detail">{type}</Title>
      {children}
      <Navigation type={type}/>
    </div>
  )
}

const Navigation = ({type}) => {
  if (type === 'Register') {
    return (
      <p className="text-slate-400 mt-5">
        Already have account?{" "}
        <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
      </p>
    )
  } else {
    return (
      <p className="text-slate-400 mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-semibold">Register</Link>
      </p>
    )
  }
}

export default Auth;