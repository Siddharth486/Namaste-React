import React from 'react';
import ReactDOM from 'react-dom/client'

const heading1 = <h1 className='namaste' key='h1'>namaste</h1>;
const heading2 = <h2 className='WORLD' key='h2'>WORLD</h2>;
const heading3 = <h3 className='world' key='h3'>world</h3>;

const ContainerComponent = () => {
  return (< >{[heading1, heading2, heading3]}{console.log(heading1)}</>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContainerComponent />);