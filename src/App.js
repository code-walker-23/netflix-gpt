import "./style/style.css";
import Body from "./components/Main/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
