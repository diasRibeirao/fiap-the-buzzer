import styled from "styled-components";

export const Container = styled.nav`
  .navbar {
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  
  .nav-menu {
    background-color: var(--primary);
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    box-shadow: 0px 0px 10px var(--bgSecondary);
    z-index: 9999 !important;
  }

  .nav-menu svg {
    fill: var(--textPrimary);
    z-index: 99999 !important;
  }
  
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    z-index: 99999 !important;
  }
  
  .nav-text a {
    text-decoration: none;
    color: var(--textPrimary);
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    z-index: 99999 !important;
  }
  
  .nav-text a:hover {
    background-color: var(--bgPrimary);
  }
  
  .nav-menu-items {
    width: 100%;
    padding: 0;
    z-index: 99999 !important;
  }
  
  .navbar-toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
  span {
    margin-left: 16px;
  }
`;
