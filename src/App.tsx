import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import store from "store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
};

export default App;
