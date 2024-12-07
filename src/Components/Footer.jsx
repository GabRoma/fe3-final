import React, { useContext } from 'react';
import { GlobalContext } from "../Components/utils/global.context";

const Footer = () => {
  const { state } = useContext(GlobalContext);
  const isDarkTheme = state.theme === 'dark';

  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <a href="https://www.digitalhouse.com/" target="_blank" rel="noopener noreferrer">
          <img src={`../public/images/DH-${isDarkTheme ? 'wh' : 'bk'}.png`} alt="DH Logo" style={{ height: '35px' }} />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/DigitalHouseUruguay/" target="_blank" rel="noopener noreferrer">
          <img src={`../public/images/fb-${isDarkTheme ? 'wh' : 'bk'}.png`} alt='Facebook' style={{ height: '30px', margin: '0 10px' }} />
        </a>
        <a href="https://www.instagram.com/_digitalhouse/" target="_blank" rel="noopener noreferrer">
          <img src={`../public/images/ig-${isDarkTheme ? 'wh' : 'bk'}.png`} alt='Instagram' style={{ height: '30px', margin: '0 10px' }} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=14634002262&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <img src={`../public/images/wp-${isDarkTheme ? 'wh' : 'bk'}.png`} alt='Whatsapp' style={{ height: '30px', margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;