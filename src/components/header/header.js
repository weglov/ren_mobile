import React, { Component } from 'react';
import logo from './logo.png';
import Menu from './menu';
import Search from "../search/search_box";
import { Link } from 'react-router';

export default class AppHeader extends Component {
  constructor(props) {
        super(props);
        this.state = {
            menuActive: '',
            classburger: 'ion-navicon',
            searchActive: '',
            classSearch: 'ion-ios-search-strong'
        }
    }
  componentWillReceiveProps(nextProps) {
    this.setState({
      menuActive: '',
      classburger: 'ion-navicon',
      searchActive: '',
      classSearch: 'ion-ios-search-strong'
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
    this.bodyFix();
  }
  bodyFix = () => {
    let root = document.documentElement;
    root.style.overflow = (root.style.overflow === 'hidden') ? '' : 'hidden';
  }
  showSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchActive: this.state.searchActive ? '' : 'active',
      classSearch: this.state.searchActive ? 'ion-ios-search-strong' : 'ion-android-close'
    });
    this.bodyFix();
  }
  render() {
    return (
        <div className="h_header">
          <Link to='/' className="h_header__logo" activeClassName='active'>
          <img src={logo} alt="logo" />
          </Link>
          <div className={"h_header__burger " + this.state.menuActive}><button onClick={this.showMenu}  className={this.state.classburger}></button></div>
          <Menu ref="menu" display={this.state.menuActive} />
          <div className={"h_header__search " + this.state.searchActive}><button className={this.state.classSearch} onClick={this.showSearch}></button></div>
          <Search display={this.state.searchActive} />
        </div>

    );
  }
}