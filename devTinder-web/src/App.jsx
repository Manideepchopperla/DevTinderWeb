import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Components/Profile"
import Login from "./Components/Login"
import Feed from "./Components/Feed"
import Body from "./Components/Body"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {
 
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
