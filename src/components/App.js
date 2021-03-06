import "../components/App.css";
import Bins from "../data/Bins";

function App() {

  return (
    <div>
      <h1>Bindicator</h1>
      <h2>Mike 'n' Warbs Bins...</h2>
      {Bins.map((val) => {
        return (
          <div>
            <h3>
              {val.date} {val.type}{" "}
            </h3>{" "}
            <img src={val.img} alt="bin_type"></img>;
          </div>
        );
      })}
    </div>
  );
}

export default App;
