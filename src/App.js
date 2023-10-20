import React, { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import UtndrIndex from "./pages/UtndrIndex"
import UtndrShow from "./pages/UtndrShow"
import UtndrNew from "./pages/UtndrNew"
import UtndrEdit from "./pages/UtndrEdit"
import NotFound from "./pages/NotFound"
import mockUtndrs from "./mockUtndr";
import "./App.css"





const App = () => {
  const [utndrs, setUtndrs] = useState(mockUtndrs)
  const createUtndr = (newUtndr) => {
    console.log("new utndr has been created", newUtndr);
  }
return (
<>
<Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utndrindex" element={<UtndrIndex utndrs={utndrs} />} />
      <Route path="/utndrshow/:id" element={<UtndrShow utndrs={utndrs}/>} />
      <Route path="/utndrnew" element={<UtndrNew createUtndr={createUtndr} />} />
      <Route path="/utndredit" element={<UtndrEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
<Footer />
</>
)
}

export default App;

