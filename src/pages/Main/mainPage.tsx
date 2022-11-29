import { useState } from 'react';
import VerticalSeperator from 'src/common/components/VerticalSeperator';
import LeftPart from './components/LeftPart/leftPartComponent';
import RightPart from './components/RightPart/rightPartComponent';

const MainPage = () => {
  const [actions, setActions] = useState({});
  return (
    <>
      <div className="mainPage_container">
        <LeftPart setActions={setActions} />
        <VerticalSeperator />
        <RightPart actions={actions} />
      </div>
    </>
  );
};

export default MainPage;
