
//a component is like a box
//and a state is how the colour and number is defined and changed
import Clock from "./Component/Clock.jsx";
import Counter from "./Component/Counter.jsx"
import GitHubProfile from "./Component/GitHubProfile.jsx";
import MovieSearch from "./Component/MovieSearch.jsx.jsx";
import Qrcode from "./Component/Qrcode.jsx";

function App() {
  return (
    <div>
      <Counter />
      <Clock></Clock>
      <Qrcode></Qrcode>
      <MovieSearch></MovieSearch>
      <GitHubProfile></GitHubProfile>
    </div>
  );
}

export default App;