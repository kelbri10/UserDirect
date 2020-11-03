
import './App.css';
import Wrapper from './components/Wrapper'; 
import Header from './components/Header'; 
import EmployeeInfo from './components/EmployeeInfo';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />

        <EmployeeInfo />
      </Wrapper>
    </div>
  );
}

export default App;
