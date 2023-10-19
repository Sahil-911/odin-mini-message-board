import MessageList from "./components/MessageList";
import NewMessage from "./components/NewMessage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="/new" element={<NewMessage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
