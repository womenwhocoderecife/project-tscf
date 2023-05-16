import './App.css';
import Button from './components/Button';


function App() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div>
      <h1>O MEU TA ASSIM: </h1>
      <Button onClick={handleClick} text="Donate" />
    </div>
  );
}

export default App;
