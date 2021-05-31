import "./App.css";
import Bins from "./Bins";

function App() {
  var date = new Date();

  return (
    <div>
      <h1>Bindicator</h1>
      {/* <h3>{"Todays date: " + new Date(date).toString()}</h3> */}
      <h2>Mike 'n' Warbs - 2021 May-December Bindicator...</h2>
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
