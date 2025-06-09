import Header from "./components/Header"
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import  cartStore  from "../src/utils/cartStore";
import { Outlet } from "react-router";





function App() {







  return (
    <>
    <Provider store={cartStore}>
      <Header />
      <Outlet>

      </Outlet>
      <Footer />

      </Provider>

    </>
  )
}

export default App
