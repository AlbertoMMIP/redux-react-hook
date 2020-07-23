import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthTaco, toggleTheme } from './redux/actions';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const { laodingTaco, taco, theme } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('theme', theme);

  useEffect(() => {
    dispatch(fecthTaco())
  }, [dispatch]);

  return (
    <div style={{backgroundColor: theme === 'LIGHT' ? 'white' : 'gray'}}>
      <button onClick={() => dispatch(toggleTheme())} >Toggle Theme</button>
      {laodingTaco ? 
        'Loading . . .' : 
        <ReactMarkdown source={taco.recipe} /> 
      }
    </div>
  );
}

export default App;
