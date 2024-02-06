import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen bg-black items-center flex justify-center flex-col">
      <h1 className="text-slate-400 font-bold text-4xl">Oops!! {error.statusText || error.message }</h1>
      <p className="text-slate-500 text-2xl">Your page requested has {error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage;