import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Hexagon = ({ children }) => {
  return <HexagonStyles>{children}</HexagonStyles>;
};

const desktopHexWidth = 750;
const mobileHexWidth = 500;

const HexagonStyles = styled(motion.div)`
  position: relative;
  width: ${desktopHexWidth}px;
  height: calc(${desktopHexWidth}px / 1.732);
  background-color: #f5f5f5;
  margin: 250px 0;
  padding: 60px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: calc(${desktopHexWidth}px / 2) solid transparent;
    border-right: calc(${desktopHexWidth}px / 2) solid transparent;
  }

  &:before {
    bottom: 100%;
    border-bottom: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
  }

  &:after {
    top: 100%;
    width: 0;
    border-top: calc(${desktopHexWidth}px / 3.464) solid whitesmoke;
  }

  @media screen and (max-width: 1440px) {
    width: ${mobileHexWidth}px;
    height: calc(${mobileHexWidth}px / 1.732);
    padding: 40px 60px;
    &:before,
    &:after {
      border-left: calc(${mobileHexWidth}px / 2) solid transparent;
      border-right: calc(${mobileHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${mobileHexWidth}px / 3.464) solid whitesmoke;
    }
    &:after {
      border-top: calc(${mobileHexWidth}px / 3.464) solid whitesmoke;
    }
  }

  @media screen and (max-width: 425px) {
    width: ${desktopHexWidth}px;
    height: ${desktopHexWidth}px;
    margin: 300px 0 200px 0;
    padding: 0;
    &:before,
    &:after {
      border-left: calc(${desktopHexWidth}px / 2) solid transparent;
      border-right: calc(${desktopHexWidth}px / 2) solid transparent;
    }
    &:before {
      border-bottom: calc(${mobileHexWidth}px / 3) solid whitesmoke;
    }
    &:after {
      border-top: calc(${mobileHexWidth}px / 3) solid whitesmoke;
    }
  }
`;

export default Hexagon;
