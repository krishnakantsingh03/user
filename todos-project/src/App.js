import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import TodoAction from "./Components/TodoAction";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TodoAction />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default App;
