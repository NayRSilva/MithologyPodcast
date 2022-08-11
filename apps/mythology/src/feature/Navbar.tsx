import { url } from "inspector";
import { NavLink } from "react-router-dom";

  // Easiest way to declare a Function Component; return type is inferred.
  const Navbar = () => {

    return(
        <div style={HeaderStyle}>
          <NavLink style={HeaderLinkStyle}
            to="/home">
            <div style={ImgHeaderStyle}/>
          </NavLink>
        </div>
    )
  }

  const HeaderStyle={
    width: '100vw',
    height: '13vh',
    backgroundColor: '#E45C3F',
    display:'flex',
    justifyContent: 'center',
    alignItens: 'stretch'
  }
  
  const HeaderLinkStyle = {
    width: '20%',
    height: '90%'
  }

  const ImgHeaderStyle = {
    backgroundImage: 'url("https://www.teclasap.com.br/wp-content/uploads/2014/11/banner.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%'
  }

  export default Navbar;

