import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Footer from './components/Footer';

const inialState = {
  cartCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, cartCount: state.cartCount + 1 };
    case 'DECREMENT':
      return { ...state, cartCount: state.cartCount - 1 };
    case 'RESET':
      return { ...state, cartCount: 0 };
    default:
      return state;
  }
};


function App() {
  const [state, dispatch] = useReducer(reducer, inialState);

  useEffect(() => {
    console.log(state.cartCount);
  }, [state.cartCount]);


  return (
    <div>
      <Header cartCount={state.cartCount} />
      <div style={{ display: "flex"}}>
        <Sidebar />
        <Section dispatch={dispatch} />
      </div>
      <Footer />
    </div>    
  );
}

export default App;
