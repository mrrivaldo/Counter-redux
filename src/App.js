import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import reducer from "./components/reducer";

const store = configureStore({ reducer });

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
      ,
    </div>
  );
}

export default App;
