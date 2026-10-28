import { useSelector } from "react-redux";
import { useUser } from "./hooks/useUser";



const App = () => {

  useUser()

 const data =  useSelector(state=>state)
  return (
    <div>App</div>
  )
}

export default App