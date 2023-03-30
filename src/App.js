import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
import CalendarPage from "./pages/Calendar"
function App() {
  return (
    <Routes>
      <Route exect path="/" element={<HomePage/>}/>
      <Route path="/todo" element={<TodoPage/>}/>
      <Route path="/today" element={<TodayPage/>}/>
      <Route path="/calendar" element={<CalendarPage/>}/>
    </Routes>
  );
}

export default App;

