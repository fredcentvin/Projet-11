import {Provider} from "react-redux";
import {store} from "./store";
import './App.css';
import Header from "../container/Header";
import Banner from "../container/Banner";
import Footer from "../container/Footer";

function App() {
  return (
    
    <Provider store ={store}>
     
    <div className="App">
      <header className="App-header">
         <Header />
      </header>
    </div>
      <Banner />
      <Footer />
    
     </Provider>
  );
}

export default App;
