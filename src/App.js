import React from 'react';
import './App.css';
import Header from './Pages/Component/header';
//import Footer from './Pages/Component/footer';
import styled from 'styled-components'; 


function App() {
  return (
    <div> 
      <Header/>
        <Container>
            <p>Hello World</p>
        </Container>
    
    </div>
  );
}

export default App;

const Container = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  margin: 20px auto;
`;