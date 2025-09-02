import "./App.css"
// import InfoBox from "./infoBox";
// import SearchBOx from './SearchBox';
// import "./SearchBox.css";
import WeatherApp from "./WeatherApp";
function App() {
  let handleClick = () =>{
    console.log("button was clicked!");
  }
  return (
    <>
      {/* <SearchBOx/>   
      <InfoBox/>  */}
      <WeatherApp/>
    </>
  )
}

export default App;
