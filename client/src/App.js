import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import People from "./pages/People";
import Companies from "./pages/Companies";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            border: "2px solid #40a02b",
            background: "#eff1f5",
            color: "#4c4f69",
          },
        }}
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/companies" element={<Companies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
