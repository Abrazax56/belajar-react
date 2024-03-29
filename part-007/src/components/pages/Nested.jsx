const Nest = ({children}) => (
    <div className="w-full min-h-screen bg-amber-100 flex flex-col justify-center items-center px-5">
      <div className="flex flex-col justify-start align-baseline items-start w-full max-w-sm p-5 bg-white rounded shadow shadow-slate-400 shadow-xl">
        {children}
      </div>
    </div>
  )

const Header = ({children}) => <h1 className="text-slate-800 text-3xl font-mono font-bold">{children}</h1>

const SubHeader = ({children}) => <p className="text-red-500 px-5 text-xl pt-1 bg-red-100 font-mono font-semibold rounded mt-5">{children}</p>

const Body = ({children}) => <p className="text-slate-600 text-sm font-mono font-semibold mt-5 w-full">{children}</p>

const Account = () => <div className="mt-5 flex flex-wrap gap-4 w-full">
          <a href="https://github.com/abrazax56" target="_blank" className="font-mono text-sm font-bold text-sky-500">🚀 GitHub</a>
          <a href="https://instagram.com/23.exs" target="_blank" className="font-mono text-sm font-bold text-sky-500">📸 Instagram</a>
        </div>
        
const Footer = ({children}) => <p className="mt-5 text-sm font-mono text-slate-500">{children}</p>

Nest.Header = Header;
Nest.SubHeader = SubHeader;
Nest.Body = Body;
Nest.Account = Account;
Nest.Footer = Footer;

export default Nest;
  
