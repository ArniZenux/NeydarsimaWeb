import React from 'react';
import styled from 'styled-components'; 

class Header extends React.Component{
    render(){
        return (
            <Nav>   
                <NavHeader>
                    <NavLeft>Hamburger</NavLeft>
                    <NavCenter>Neyðarsími</NavCenter>
                    <NavRight>11.03.2020</NavRight>
                </NavHeader>
            </Nav>
        )
    }
}

export default Header;

const Nav = styled.div` 
    background-color: gray; 
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  `;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  font-size: 12px;
  }
`;