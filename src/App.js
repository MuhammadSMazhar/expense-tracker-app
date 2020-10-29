import React from 'react';
import './App.css';
import Child from './child';
import { ContextProvider } from './transContext';

function App() {
  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
}

export default App;
