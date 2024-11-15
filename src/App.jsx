import Router from "./routes/router";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="bg-slate-700">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
