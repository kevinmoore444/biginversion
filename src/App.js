import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ruben" lastName="Ocasio" age={21} hairColor="Brown"/> 
      <PersonCard firstName="Colby" lastName="Dumonchelle" age={21}  hairColor="Black"></PersonCard>
      <PersonCard firstName="Jason" lastName="Yang" age={21}  hairColor="Brown"></PersonCard>
      <PersonCard firstName="Mike" lastName="Connors" age={21}  hairColor="Black"></PersonCard>
      <PersonCard firstName="Jonathan" lastName="G" age={21}  hairColor="Brown"></PersonCard>
    </div>
  );
}

export default App;
