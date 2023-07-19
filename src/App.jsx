import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx"
import NavBar from "./components/Navbar.jsx"

function App() {

  const personInfo = [
    {
      number: 1,
      firstName: 'George',
      lastName: 'Hill',
      address: 'Cebu City'
    },
    {
      number: 2,
      firstName: 'Michael',
      lastName: 'Adonis',
      address: 'Lapu-Lapu City'
    },
    {
      number: 3,
      firstName: 'Kobe',
      lastName: 'Saya',
      address: 'Iloilo City'
    },
    {
      number: 4,
      firstName: 'Lebron',
      lastName: 'Germs',
      address: 'Carcar City'
    },
    {
      number: 5,
      firstName: 'Anthony',
      lastName: 'Hale',
      address: 'Cebu City'
    },
  ]

  const tableContent = personInfo.map((person) => <Content key={person.number} firstName={person.firstName} lastName={person.lastName} address={person.address}/>);

  return (
    <>
      <NavBar />
      <div className="container">
        {tableContent}
      </div>

      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
