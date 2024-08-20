import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './data.js'

function App() {
    const cards = data.map(x => {
        return(
            <Card
                item={x}

            />
        )
    })
  return (
    <div className="App">
      <Nav />
        {cards}
    </div>
  );
}

export default App;
