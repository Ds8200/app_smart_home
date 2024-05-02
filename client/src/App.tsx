import { Outlet } from "react-router-dom"
import HeaderMain from "./components/HeaderMain"


function App() {

  return (
    <>
      <HeaderMain />
      <div className="flex flex-wrap bg-orange-200 w-full h-[89.5vh] p-10 items-start justify-center text-white text-2xl font-serif">
        <Outlet />
      </div>
    </>
  )
}

export default App
