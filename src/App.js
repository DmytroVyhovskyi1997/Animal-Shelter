import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Animals from "./components/pages/Animals/Animals";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="animal" element={<Animals />} />
      </Route>
    </Routes>
  );
};

export default App;

