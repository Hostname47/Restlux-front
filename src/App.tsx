import { Provider } from "react-redux";
import { store } from "./app/store";
import axios from "axios";
import Bootstrapper from "./components/_bootstrapper";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <Provider store={store}>
      <Bootstrapper />
    </Provider>
  );
}

export default App;
