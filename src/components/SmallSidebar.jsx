import React from 'react';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashBoardLayout';

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>Small Sidebar</Wrapper>;
};

export default SmallSidebar;
