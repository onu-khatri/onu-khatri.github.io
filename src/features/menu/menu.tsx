import React from "react";
import CollapsibleSideMenu from "../../components/slide-menu/side-menu";
import CollapsibleTopMenu from "../../components/top-menu/top-menu";

const Menu = () => {
  const [openSlideMenu, setSlideMenuOpen] = React.useState(true);
  const [openTopMenu, setTopMenuOpen] = React.useState(false);
  //const [open, setOpen] = React.useState(true);

  const setOpenActionForSlideMenu = (value: boolean) => {
    setSlideMenuOpen(value);
    if(value == false) {
      setTopMenuOpen(true);
    }
  };

  const setOpenActionForTopMenu = (value: boolean) => {
    setTopMenuOpen(value);
    if(value == false) {
      setSlideMenuOpen(true);
    }
  };

  return openSlideMenu ? 
    <CollapsibleSideMenu
      open={openSlideMenu}
      setOpen={setOpenActionForSlideMenu}
    ></CollapsibleSideMenu>
    :
    <CollapsibleTopMenu
      open={openTopMenu}
      setOpen={setOpenActionForTopMenu}
    ></CollapsibleTopMenu>  
};

export default Menu;
