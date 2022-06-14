import "./navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch, error } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleClickR = () => {
    navigate("/register")
  }

  const handleClickL = () => {
    navigate("/login")
  }

  const handleClick = async (e) => {
    dispatch({ type: "LOGOUT" })
  }

  return (

    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Kimbooking</span>
        </Link>
        {user ? <button onClick={handleClick} className="logout">Logout</button>
        :
          (<div className="navItems">
            <button onClick={handleClickR} className="navButton">Register</button>
            <button onClick={handleClickL} className="navButton">Login</button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar