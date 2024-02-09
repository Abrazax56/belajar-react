import Nest from './Nested.jsx'
import States from './State.jsx'
import {useState, useEffect, useRef} from "react"
const Humans = [
  {
    name: "Ahmad Beni Rusli",
    job: "Frontend Developer",
    intro:`hi, my name is Ahmad Beni Rusli`,
    footer:`© 2024 by Ahmad Beni Rusli`,
    account: {
      instagram: "https://instagram.com/23.exs",
      github: "https://github.com/abrazax56"
    }
  },
  {
    name: "Via Fitriana",
    job: "Brand Ambassadors",
    intro:`hi, my name is Via Fitriana`,
    footer:`© 2024 by Via Fitriana`,
    account: {
      instagram: "https://instagram.com/viiiaaaa.fy",
      github: "https://github.com/viafitriana"
    }
  }
];

const email = localStorage.getItem('email')

export default () => {
  const [hello, setHello] = useState([])
  const [say, setTotalSay] = useState(0)
  useEffect(() => {
    setHello(JSON.parse(localStorage.getItem("say")) || [])
    // if(say === 0){
//       document.querySelector(".delete").classList.add("hidden")
//     } else {
//       document.querySelector(".delete").classList.remove("hidden")
//     }
  }, [])
  useEffect(() => {
    if(hello.length > 0) {
      const sum = hello.reduce((x, y) => {
        const contn = hello.find(hel => hel.name === y.name)
        return x + y.count
      }, 0)
      setTotalSay(sum)
      localStorage.setItem("say", JSON.stringify(hello))
    }
  }, [hello])
  
  const HandleDelete= () => {
   
      localStorage.removeItem("say")
      setHello([])
      setTotalSay(0)
    
  }
  const HandleHello = (name) => {
    if(hello.find(man => man.name === name)) {
      setHello(
        hello.map(i => i.name === name ? {...i, count: i.count + 1} : i)
      )
    } else {
      setHello([...hello, {name, helo: "hello " + name, count: 1}])
    }
  }
  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = "/login"
  }
  const refHello = useRef(JSON.parse(localStorage.getItem("say")) || [])
  const HandleHelloRef = (name) => {
    refHello.current = [...refHello.current, {name: "bunu", helo:"hi bunu", count: 78}]
    localStorage.setItem("say", JSON.stringify(refHello.current))
  }
  const totalCount = useRef(null)
  useEffect(() => {
    if(hello.length > 0) {
      totalCount.current.style.visibility = "visible";
    } else {
      totalCount.current.style.visibility = "hidden"
    }
  }, [hello])
  return (
  <>
    <div className="flex justify-end h-20 bg-pink-600 items-center text-white px-4 font-bold">
      {email}
      <button className="ml-5 bg-white text-black font-semibold px-3 rounded" type="button" onClick={HandleLogout}>Logout</button>
    </div>
    <div className="w-full min-h-screen bg-amber-100 flex flex-wrap gap-2 justify-center items-center px-5">
      <div className="w-3/4 flex flex-wrap">
      {
      Humans.map(human => (
        <Nest key={human.name}>
          <Nest.Header>{human.name}</Nest.Header>
          <Nest.SubHeader>{human.job}</Nest.SubHeader>
          <Nest.Body>{human.intro}</Nest.Body>
          <Nest.Account instagram={human.account.instagram} github={human.account.github}/>
          <Nest.Button handleHello={HandleHello} name={human.name}>Say Hello 👋</Nest.Button>
          <Nest.Footer>{human.footer}</Nest.Footer>
         </Nest>
      ))
      }
      </div>
      <div className="w-1/4">
        <h1 className="text-2xl font-bold text-red-700">Hello Count</h1>
        <ul>
          {
            hello.map((person) => <li key={person.name}>{person.helo} count={person.count}</li>)
          }
        </ul>
        <p ref={totalCount}>total say = {say}</p>
        <button type="button" onClick={HandleDelete} className="px-4 bg-red-700 rounded font-bold text-white delete">Delete Say</button>
        {/*<ul>
          {
            refHello.current.map((person) => <li key={person.name}>{person.helo} count={person.count}</li>)
          }
        </ul>*/}
      </div>
    </div>
  </>
  )}