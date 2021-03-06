import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

// nav container styles
const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease 0.3s;
`;

// menu button styles
const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
`;

// menu items styles
const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
`;

// menu item styles
const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 2 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragSnapToOrigin
        dragElastic={0.05}
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          Shop
        </MenuItem>
        <MenuItem
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          New Arrival
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};
export default Navbar;
