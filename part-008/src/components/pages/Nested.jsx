const Nest = ({children}) => (
      <div className="flex flex-col justify-between align-baseline items-start w-full max-w-sm p-5 bg-white rounded shadow shadow-slate-400 shadow-xl mb-3">
        {children}
      </div>
  )

const Header = ({children}) => <h1 className="text-slate-800 text-3xl font-mono font-bold">{children}</h1>

const SubHeader = ({children}) => <p className="text-red-500 px-5 text-xl pt-1 bg-red-100 font-mono font-semibold rounded mt-5">{children}</p>

const Body = ({children}) => <p className="text-slate-600 text-sm font-mono font-semibold mt-5 w-full">{children}</p>

const Account = ({instagram, github}) => <div className="mt-5 flex flex-wrap gap-4 w-full">
          <a href={github} target="_blank" className="font-mono text-sm font-bold text-sky-500">🚀 GitHub</a>
          <a href={instagram} target="_blank" className="font-mono text-sm font-bold text-sky-500">📸 Instagram</a>
        </div>

const Button = ({children, handleHello, name}) => <button className="px-4 mt-5 bg-red-700 rounded text-white text-xl" type="button" onClick={() => handleHello(name)}>{children}</button>

const Footer = ({children}) => <p className="mt-5 text-sm font-mono text-slate-500">{children}</p>

Nest.Header = Header;
Nest.SubHeader = SubHeader;
Nest.Body = Body;
Nest.Account = Account;
Nest.Button = Button;
Nest.Footer = Footer;

export default Nest;
  
