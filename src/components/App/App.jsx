import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <h1 className="App__title">Ты сегодня покормил кота?</h1>
            <Cards />
        </div>
    );
}

export default App;
