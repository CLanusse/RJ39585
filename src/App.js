import logo from './logo.svg';
import './App.css';

const saludar = () => null

function App() {

  const profesor = 'Conrado Lanusse'
  const tutor = 'Santiago Rivarola'

  const estilos = {
    color: 'red',
    marginTop: '20px'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={estilos}>
          Bienvenidos a React JS
        </p>
        <hr/>
        <h4>Profe { profesor }</h4>
        <h5>{ saludar() }</h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
