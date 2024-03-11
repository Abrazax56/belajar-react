import Title from '.././Fragments/Title/index.jsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkMode } from '../.././context/DarkMode.jsx';

const Auth = ({children, foot, type}) => {
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  //alert(isDarkMode);
  const dark = isDarkMode ? 'bg-slate-950' : 'bg-white'
  return (
    <div className={`w-full flex justify-center items-center flex-col min-h-screen ${dark}`}>
     <div className="p-8 rounded w-full max-w-xs flex justify-end">
       <button onClick={() => setIsDarkMode(!isDarkMode)} className="px-5 py-1 bg-slate-900 rounded text-white">{isDarkMode ? 'light' : 'dark'}</button>
     </div>
     <div className="p-8 rounded w-full max-w-xs bg-slate-900">
      <Title footnotes="Welcome, please enter your detail">{type}</Title>
      {children}
      <Navigation type={type}/>
     </div>
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