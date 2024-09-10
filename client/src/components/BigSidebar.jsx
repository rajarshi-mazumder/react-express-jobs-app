import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import Logo from './Logo';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  const isBigSideBar = true;

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSideBar={isBigSideBar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
