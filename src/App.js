import React from 'react'
import ButtonClickUp from './Function/ButtonClickUp'
// import FunctionButtonXY from './Function/FunctionButtonXY'
// import FunctionMouseXY from './Function/FunctionMouseXY'
// import ButtonClick from './Function/ButtonClick';
// import ButtonUp from './Function/ButtonUp';
// import FunctionPhotos from './Function/FunctionPhotos';
// import FunctionInput from './Function/FunctionInput'
// import FUnctionRandom from './Function/FUnctionRandom';
// import FunctionTitle from './Function/FunctionTitle';
// import FunctionColors from './Function/FunctionColors';
// import FunctionInterval from './Function/FunctionInterval';
// import ProviderConsummer from './Function/ProviderConsummer';
// import FunctionAxios from './Function/FunctionAxios'
// import FunctionMouseMove from './Function/FunctionMouseMove'
// import FunctionEffect10 from './Function/FunctionEffect10'
// import FunctionMouse from './Function/FunctionMouse'
// import Function from './Function/Function';
// import FunctionEffect from './Function/FunctionEffect';
// import FunctionEffect3 from './Function/FunctionEffect3';
// import FunctionImage from './Function/FunctionImage';
// import FunctionState from './Function/FunctionState';
// import FunctionState2 from './Function/FunctionState2';
// import FunctionState3 from './Function/FunctionState3';

export const nameContext = React.createContext()
export const nickContext = React.createContext()

function App() {
  return (
    <div>
      <ButtonClickUp />
      {/* <FunctionButtonXY /> */}
      {/* <FunctionMouseXY /> */}
      {/* <FunctionInterval /> */}
      {/* <FunctionColors /> */}
      {/* <FunctionTitle /> */}
      {/* <FUnctionRandom /> */}
      {/* <FunctionInput /> */}
      {/* <ButtonUp /> */}
      {/* <FunctionPhotos /> */}
      {/* <ButtonClick /> */}
      {/* <nameContext.Provider value={'Ronaldo'}>
        <nickContext.Provider value={'40'}>
          <ProviderConsummer />
        </nickContext.Provider>
      </nameContext.Provider> */}
      {/* <FunctionAxios /> */}
      {/* <FunctionMouseMove /> */}
      {/* <FunctionEffect10 /> */}
      {/* <FunctionMouse /> */}
      {/* <Function />
      <FunctionState />
      <FunctionState2 />
      <FunctionState3 />
      <FunctionImage />
      <FunctionEffect />
      <FunctionEffect3 /> */}
    </div>
  );
}

export default App;
