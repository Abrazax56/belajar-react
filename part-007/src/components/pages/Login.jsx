import FormLogin from '.././Fragments/FormLogin/index.jsx'
import Auth from '.././Layouts/Authlayout.jsx'

const LogIn = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center">
      <Auth type="Login">
        <FormLogin/>
      </Auth>
    </div>
  )
}

export default LogIn;