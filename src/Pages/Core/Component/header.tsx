import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { HeaderContainer } from '../../../utils/CSS/Divs';
import menu from '../../../utils/icons/menu.png'; 

class Header extends React.Component{
  render(){
        return (
          <HeaderContainer>
          <div id="first">
              <div>
              <img className="img" src={menu} alt={'menu'}/>
                  <div id="content">
                      <NavLink to="/" activeClassName="is-active" className="normal" exact>Túlkur</NavLink>
                      <NavLink to="/Info" activeClassName="is-active" className="normal" exact>Verkefni</NavLink>
                      <NavLink to="/ContentPage" activeClassName="is-active" className="normal" exact>Skrá verkefni</NavLink>
                  </div>
              </div>
          </div>
          <div id="secnd">
          </div>
          <div id="last">
          </div>
      </HeaderContainer>
        );
    }
}

export default withRouter(Header);