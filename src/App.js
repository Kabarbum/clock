import Timer from "./components/Timer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Main/>} path={'/'}/>
        <Route element={<Timer/>} path={'/timer'}/>
      </Routes>
    </div>
  );
}

export default App;
