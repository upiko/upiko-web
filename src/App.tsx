import React from 'react';
import './App.css';
import {Icon} from 'antd';

const App: React.FC = () => {
  return (
   <div className="container flex">
   <div>
   <h2 className="logo-text"><Icon type="property-safety" theme="twoTone" twoToneColor="#3fb1b7" />upiko</h2>
   </div>
    <p>Great web products, with none of the evil</p>
   </div>
  );
}

export default App;
