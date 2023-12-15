import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashBoardLayout';

const BigSidebar = () => {
<<<<<<< HEAD
=======
  console.log('hola');
>>>>>>> ba2b357166e3ca32369e66ec9fef34a757a0d239
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
