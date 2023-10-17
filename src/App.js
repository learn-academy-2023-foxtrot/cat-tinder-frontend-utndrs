import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import UtndrIndex from "./pages/UtndrIndex"
import UtndrShow from "./pages/UtndrShow"
import UtndrNew from "./pages/UtndrNew"
import UtndrEdit from "./pages/UtndrEdit"
import NotFound from "./pages/NotFound"





const App = () => {
return (
<>
<Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utndrindex" element={<UtndrIndex />} />
      <Route path="/utndrshow" element={<UtndrShow />} />
      <Route path="/utndrnew" element={<UtndrNew />} />
      <Route path="/utndredit" element={<UtndrEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
<Footer />
</>
)
}

export default App;

