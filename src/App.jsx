import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contentbar from "./Component/Contentbar";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Header />

      <div className="main-layout">
        <Sidebar />
        <Contentbar />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;