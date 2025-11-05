import { Navigate, Route, Routes } from "react-router"
import Layout from "./layouts/layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import { useContext } from "react"
import { ProfileContext } from "./providers/profile_provider"

function App() {
  const { email } = useContext(ProfileContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={(email === "" ? <Navigate to="/login" /> : <Home />)}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
      </Route>
    </Routes>
  )
}

export default App