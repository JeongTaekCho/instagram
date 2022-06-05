import routes from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
