import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [ruser, setRuser] = useState(true);
  const users = props.users;
  function handleUInput(event) {
    setEusername(event.target.value);
  }
  function handlePInput(event) {
    setEpassword(event.target.value);
  }
  function checkUser() {
    var userfound = false;
    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("login successful");
        userfound = true;
        navigate("/landing", { state: eusername });
      }
    });

    if (userfound === false) {
      console.log("login failed");
      setRuser(false);
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border-md">
        <h1 className="text-3xl font-medium">Hey hi</h1>
        {ruser ? (
          <p>I help you manage your activities after you login:</p>
        ) : (
          <p className="text-red-500">Please sign up Before you Login!</p>
        )}
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border black p-1 bg-transparent border rounded-md"
            placeholder="username"
            onChange={ handleUInput }
          ></input>
          <input
            type="text"
            className="w-52 border black p-1 bg-transparent border rounded-md"
            placeholder="password"
            onChange={ handlePInput }
          ></input>
          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              signUp{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
