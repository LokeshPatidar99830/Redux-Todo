import {Provider} from "react-redux";
import Todo from './Components/Todo'
import { store } from "./Store/Store";

function App() {
  return (
   <Provider store={store}>
      <Todo/>
    </Provider>
  );
}
export default App;
