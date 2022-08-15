import { BrowserRouter, Routes, Route } from "react-router-dom"

import Signin from "./Auth"

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes