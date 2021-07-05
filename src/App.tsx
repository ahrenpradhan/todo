import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Routes from "./routes";

import { store } from "./stores";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes />
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
