import{BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App()
{
  const [users, setusers] = useState(
    [{
      username : "Shankar", 
      password : "1995"
    },
  {
      username : "Varshini", 
      password : "2002"
    }
  
  ]
  )

return (<div>

<BrowserRouter>
<Routes>
<Route path = '/'element={<Login users = {users} setusers = {setusers}/>}></Route>
<Route path = '/signup'element={<Signup users = {users} setusers = {setusers}/>}></Route>
<Route path = '/landing'element={<Landing />}></Route>
</Routes>
</BrowserRouter>
</div>
)
}
export default App;


