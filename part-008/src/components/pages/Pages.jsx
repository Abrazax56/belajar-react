import Nest from './Nested.jsx'

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
    {
      Humans.map(human => (
        <Nest key={human.name}>
          <Nest.Header>{human.name}</Nest.Header>
          <Nest.SubHeader>{human.job}</Nest.SubHeader>
          <Nest.Body>{human.intro}</Nest.Body>
          <Nest.Account instagram={human.account.instagram} github={human.account.github}/>
          <Nest.Footer>{human.footer}</Nest.Footer>
         </Nest>
      ))
    }
    </div>
  </>
  )}