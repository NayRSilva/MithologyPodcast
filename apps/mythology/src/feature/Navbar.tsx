import { NavLink } from "react-router-dom";

  // Easiest way to declare a Function Component; return type is inferred.
  const Navbar = () => {

    return(
        <div style={exampleStyle}>
            <NavLink 
                to="/">
                    Home
                </NavLink>
                <NavLink 
                to="Episode">
                    Episode
                </NavLink>

        </div>

    )


  }

  const exampleStyle={
    width: '100%',
    display:'flex'
  }

  export default Navbar;

