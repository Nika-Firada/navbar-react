import NavBar from './NavBar';
import { useState, useRef, useEffect } from 'react';


function App() {
  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
