import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import UtndrIndex from "./pages/UtndrIndex"
import UtndrShow from "./pages/UtndrShow"
import UtndrNew from "./pages/UtndrNew"
import UtndrEdit from "./pages/UtndrEdit"
import NotFound from "./pages/NotFound"
import "./App.css"





const App = () => {
  const [utndrs, setUtndrs] = useState([])
  useEffect(()=>{
    readUtndr()
  }, [])

  const readUtndr = () => {
    fetch("http://localhost:3000/utndrs")
    .then((response) => response.json())
    .then((payload) => setUtndrs(payload))
    .catch((error) => console.log(error))
  }
  const createUtndr = (utndr) => {
    fetch("http://localhost:3000/utndrs",{
      body: JSON.stringify(utndr),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readUtndr())
      .catch((errors) => console.log("Utndr creates errors", errors))
  }
  const updateUtndr = (utndr, id) => {
    console.log("utdnr:", utndr)
    console.log("id:", id)
  }
return (
<>
<Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utndrindex" element={<UtndrIndex utndrs={utndrs} />} />
      <Route path="/utndrshow/:id" element={<UtndrShow utndrs={utndrs}/>} />
      <Route path="/utndrnew" element={<UtndrNew createUtndr={createUtndr} />} />
      <Route path="/utndredit/:id" element={<UtndrEdit utndrs={utndrs} updateUtndr={updateUtndr} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
<Footer />
</>
)
}

export default App;

