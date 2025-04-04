import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "./app/store";
import Header from "./components/header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>{/* <Route path="/" element={<Terminal />} /> */}</Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
