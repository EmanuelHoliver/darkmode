import { FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react'
import './App.css'

import Home from './components/home'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };
  
    return (
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Home />
        <FormControlLabel onClick={toggleDarkMode} control={<Switch defaultChecked color="default"/>} label="Dark Mode" />
      </div>
    )
  
}

export default App;
