import { url } from 'inspector';
import { NavLink } from 'react-router-dom';
import { apiProvider } from '../services/api/ApiProvider';

// Easiest way to declare a Function Component; return type is inferred.
const Navbar = () => {
  const { isLoading, data } = apiProvider.useGetLogoImage();
  let dataImg: string;

  if (!isLoading) {
    dataImg = data.data.data.attributes.LogoImage.data.attributes.url;

    return (
      <div style={HeaderStyle}>
        <NavLink to="/">
          <img
            alt="logo mitologia podcast"
            src={dataImg ? dataImg : '../assets/image/header.png'}
            height="100%"
          />
        </NavLink>
      </div>
    );
  }

  return (
    <div style={HeaderStyle}>
      <NavLink to="/">
        <img
          alt="logo mitologia podcast"
          src="../assets/image/header.png"
          height="100%"
        />
      </NavLink>
    </div>
  );
};

const HeaderStyle = {
  width: '100%',
  height: '13vh',
  backgroundColor: '#E45C3F',
  display: 'flex',
  justifyContent: 'center',
};

const ImgHeaderStyle = {
  width: '100%',
  height: '100%',
};

export default Navbar;
