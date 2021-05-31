import "./App.css";
import Green from '../src/green_bin.jpg';
import Black from '../src/black_bin.jpg';
import Recyling from '../src/recycling.jpg';

function App() {
  // const bins = [
  //   { date: new Date("January 4, 2021 09:00:00"), type: "recycling", img: Green },
  //   { date: new Date("January 11, 2021 09:00:00"), type: "normal", img: Grey },
  // ];

  var date = new Date();

    const bins = [
    { date: "Monday 31st May 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 7th June 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 14th June 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 21st June 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 28th June 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 5th July 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 12th July 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 19th July 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 26th July 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 2nd August 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 9th August 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 16th August 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 23rd August 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 30th August 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 6th September 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 13th September 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 20rd September 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 27th September 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 4th October 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 11th October 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 18th October 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 25th October 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 1st November 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 8th November 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 15th November 2021", type: "general waste + recycling", img: Black },
    { date: "Monday 22nd November 2021", type: "garden waste + recycling", img: Green },
    { date: "Monday 29th November 2021", type: "general waste + recycling", img: Black }    
  ];

  return (
    <div>
      <h1>Bindicator</h1>
      <h3>{"Current date = " + new Date(date).toString()}</h3>
      <h4>Cheshire West, Zone B, 2021 May-December bin cycle...</h4>
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


