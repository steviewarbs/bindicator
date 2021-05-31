import "./App.css";
import Green from '../src/green_bin.jpg';
import Grey from '../src/grey_bin.jpg';

function App() {
  // const bins = [
  //   { date: new Date("January 4, 2021 09:00:00"), type: "recycling", img: Green },
  //   { date: new Date("January 11, 2021 09:00:00"), type: "normal", img: Grey },
  // ];

  var date = new Date();

    const bins = [
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
    { date: "Monday 4th January 2021", type: "recycling", img: Green },
    { date: "Monday 11th January 2021", type: "general waste", img: Grey },
  ];

  return (
    <div>
      <h1>Bindicator</h1>
      <h3>{new Date(date).toString()}</h3>
      <h4>This weeks bin is...</h4>
      {bins.map((val) => {
        return (
          <div>
            <p>
              {val.date} {val.type}{" "}
            </p>{" "}
            <img src={val.img} alt="bin_type"></img>;
          </div>
        );
      })}
    </div>
  );
}

export default App;


