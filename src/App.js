import AbcComponent from "./AbcComponent";
// import './App.css';
import MyComponent from "./MyComponent";
import XyzComponent from "./XyzComponent";
import Messenger from "./Messenger";
import GreetUser from "./GreetUser";

function App() {
  return (
    <div>
      <h1>This is my React Js App</h1>
      <AbcComponent />
      <XyzComponent />
      <MyComponent />
      <Messenger />
      <GreetUser />
    </div>
  );
}

export default App;
