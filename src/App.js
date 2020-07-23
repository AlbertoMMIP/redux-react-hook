import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthTaco } from './redux/actions';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const { laodingTaco, taco } = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('state', taco);

  useEffect(() => {
    dispatch(fecthTaco())
  }, [dispatch]);

  return (
    <div className="App">
      {laodingTaco ? 
        'Loading . . .' : 
        <ReactMarkdown source={taco.recipe} /> 
      }
    </div>
  );
}

export default App;
