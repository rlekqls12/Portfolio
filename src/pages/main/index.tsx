import React from 'react';
import BaseColor from 'src/helpers/colors';
import Tiles from './parts/tiles';

const testArr = Array.from({ length: 6 }, (d, i) => `${i}`);

function MainPage() {
  return (
    <div
      id={'topWrapper'}
      style={{
        minWidth: '720px',
        height: '100vh',
        background: BaseColor.background
      }}
    >
      <Tiles data={testArr} minSize={200}></Tiles>
    </div>
  );
}

export default MainPage;
