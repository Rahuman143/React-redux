import React from 'react';
import logo from './logo.svg';
import './App.css';
import { actionCreators , State} from './State';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';

function App() {
  const dispatch = useDispatch();
  const  {depositeMoney , withdrawMoney, bankruptMoney}= bindActionCreators(actionCreators,dispatch)
  const amount = useSelector((state: State) => state.bank)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <h1>{amount}</h1>
      <Button variant="primary" onClick={() => depositeMoney(1000)}>Deposite</Button>
      <Button variant="secondary" onClick={() => withdrawMoney(500)}>Withdraw</Button>
      <Button variant="success" onClick={() => bankruptMoney()}>BankRunk</Button>
    </div>
  );
}

export default App;
