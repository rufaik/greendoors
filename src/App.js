import React from 'react'
import FormSlider from './components/FormSlider'
import OptionContextProvider from './context/OptionContext'
import './App.css';

function App() {

  return (
    <div>
      <OptionContextProvider>
        <FormSlider />
      </OptionContextProvider>
    </div>
  );
}

export default App;
