import { url } from "inspector";
import { NavLink } from "react-router-dom";
import { apiProvider } from "../services/api/ApiProvider"

  // Easiest way to declare a Function Component; return type is inferred.
  const Navbar = () => {
    return(
      <div style={HeaderStyle}>
        <NavLink
          to="/home">
          <img src='../assets/image/header.png' height='100%'/>
        </NavLink>
      </div>
    )
    return null;
  }

  const HeaderStyle={
    width: '100vw',
    height: '13vh',
    backgroundColor: '#E45C3F',
    display:'flex',
    justifyContent: 'center',
  }
  
  const ImgHeaderStyle = {
    width: '100%',
    height: '100%'
  }

  export default Navbar;

