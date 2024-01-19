import FormSignup from '.././Fragments/FormSignup/index.jsx'
import Auth from '.././Layouts/Authlayout.jsx'

const SignUp = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center">
      <Auth type="Register">
        <FormSignup/>
      </Auth>
    </div>
  )
}

export default SignUp;