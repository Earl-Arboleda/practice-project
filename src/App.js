// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from "./Card";
import Pets from './Pets';
import Logo from './Logo.png';
import User from './User';
import UserId from './User-head';
function createPet(Pets){
  return(
    <div>
      <Card
        image = {Pets.imgUrl}
        name = {Pets.name}
        breed = {Pets.breed}
        description = {Pets.description}
      />
    </div>
  );
}


function createUser(User){
  return(
    <div>     
      <UserId 
    img = {User[0].img}
    name = {User[0].name}
    age = {User[0].age}
    address = {User[0].address}
    details = {User[0].details}
  /></div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Header logo={Logo}/>
        <UserId 
          img = {User[0].img}
          name = {User[0].name}
          age = {User[0].age}
          address = {User[0].address}
          details = {User[0].details}
        />
        <div className="content">
          <div className='content-box'>
        {Pets.map(createPet)}
        </div>
        </div>
    </div>
  );
}

export default App;
