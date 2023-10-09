import "./App.css";
import Header from "./components/Header/Header";
import InputContainer from "./components/InputContainer/InputContainer";
import RenderAnswers from "./components/RenderAnswers/RenderAnswers";

import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputContainer />
      <RenderAnswers />
    </Provider>
  );
}

export default App;
