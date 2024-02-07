import Nest from './Nested.jsx'
import {useState} from "react"
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
  const [hello, setHello] = useState([
    {
      name: "Ahmad Beni",
      helo: "Hello beni",
      count: 1,
    }
  ])
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
      </div>
    </div>
  </>
  )}