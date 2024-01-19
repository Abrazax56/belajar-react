export default function() {
  return (
    <div className="flex justify-center p-8 min-h-screen items-center">
      <div className="w-full max-w-xs bg-slate-300 border border-black rounded-lg shadow">
        <a href="#">
          <img
            src="/image/card.jpg"
            alt="product-img"
            className="p-8 rounded-t-lg"/>
        </a>
        <div className="mt-5 px-5 pb-5">
          <h1 className="text-2xl">Sepatu</h1>
          <p className="text-white mt-4"></p>
        </div>
      </div>
    </div>
  )
}