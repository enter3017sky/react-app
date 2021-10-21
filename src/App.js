import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Logo = styled.img`
  height: 100%;
`;

const Navbar = styled.div`
  height: 50px;
`;

const NavList = styled.ul`
`;

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo src={logo} className="App-logo" alt="logo" />

        <NavList />
      </Navbar>
      <header className="App-header">
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
      </header>

    </div>
  );
}

export default App;
