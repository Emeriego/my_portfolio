import React, { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

import themeData from './themeData'
import modeThemesData from './modeThemesData';

const Theme = () => {
  const [btnColor, setBtnColor] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [mode, setMode] = useState({})


  useEffect(()=>{
    setBtnColor([]);

    const defaultMode = modeThemesData.filter(light =>light.name === "light");
    setMode(defaultMode);
    defaultMode.map(m=>{
      document.documentElement.style.setProperty(`--bg-mode-primary`, m.primaryColor);
    document.documentElement.style.setProperty(`--bg-mode-secondary`, m.secondaryColor);
    document.documentElement.style.setProperty(`--bg-mode-tertiary`, m.tertiaryColor);
   document.documentElement.style.setProperty(`--mode-text-100`, m.textColorLight);
    document.documentElement.style.setProperty(`--mode-text-200`, m.textColorBold);

    })
    



    themeData.map(color =>{
      setBtnColor(prev => [...prev, color.primaryColor]);
      
   });
      
  },[])

  const switchMode =()=>{
    setDarkMode(prev => !prev);
    const userMode = modeThemesData.filter(um =>um.name === `${darkMode? "light" : "dark"}`);
    userMode.map(m=>{
      document.documentElement.style.setProperty(`--bg-mode-primary`, m.primaryColor);
    document.documentElement.style.setProperty(`--bg-mode-secondary`, m.secondaryColor);
    document.documentElement.style.setProperty(`--bg-mode-tertiary`, m.tertiaryColor);
    document.documentElement.style.setProperty(`--mode-text-100`, m.textColorLight);
    document.documentElement.style.setProperty(`--mode-text-200`, m.textColorBold);


    })
    


  }
    const switchTheme =(color)=>{
        document.documentElement.style.setProperty(`--color-primary1`, color);

    }


  return (
    <>
 <div className='theme' onClick={()=> setShowThemeMenu(prev => !prev)}>
        
        <AiFillEdit />

</div>
<div className={`theme-container ${showThemeMenu && "show-theme-menu"}`}>

<div className='mode-container' >
  <FaSun />
  <div className='mode-switch' onClick={switchMode} >
          <button className={`mode-switch-btn ${darkMode && "to-dark"}`}></button>
  </div>
  <FaMoon />
</div>
<hr />
  <div className='theme-btns-wrapper'>
    {
             themeData.map((color, index) =>{
                // console.log(color.primaryColor)
                document.documentElement.style.setProperty(`--theme-btn-${index+1}`, color.primaryColor);

                return(
                  <div className='theme-btns' onClick={()=> {setShowThemeMenu(false); switchTheme(color.primaryColor) }}>

                      <button className={`theme-btn btn-${index+1}`}  ></button>
                      <span>{color.name}</span>
                  </div>
)

             })           
        }
        </div>

  
  </div>
    </>
  
   
  )
}

export default Theme;