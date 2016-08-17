import React, { Component } from 'react';
import logo from './logo.png';
import Menu from './menu'
import { Link } from 'react-router';

export default class AppHeader extends Component {
  constructor(props) {
        super(props);
        this.state = {
            menuActive: '',
            classburger: 'ion-navicon'
        }
    }
  componentWillReceiveProps(nextProps) {
    this.setState({
      menuActive: '',
      classburger: 'ion-navicon'
    });
    let root = document.documentElement;
    root.style.overflow = '';

  }
  showMenu = (e) => {
    e.preventDefault();
    this.setState({
      menuActive: this.state.menuActive ? '' : 'active', 
      classburger: this.state.menuActive ? 'ion-navicon' : 'ion-android-close'
    });
    let root = document.documentElement;
    root.style.overflow = (root.style.overflow === 'hidden') ? '' : 'hidden';
  }
  render() {
    return (
        <div className="h_header">
          <Link to='/' className="h_header__logo" activeClassName='active'>
          <img src={logo} alt="logo" />
          </Link>
          <div className={"h_header__burger " + this.state.menuActive}><button onClick={this.showMenu}  className={this.state.classburger}></button></div>
          <Menu ref="menu" display={this.state.menuActive} />
          <div className="h_header__search"><button className="ion-ios-search-strong"></button></div>
        </div>

    );
  }
}