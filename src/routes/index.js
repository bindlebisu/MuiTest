import { BrowserRouter, Routes, Route } from "react-router-dom"

import Signin from "./Signin"
import SignUp from "./Signup"

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes