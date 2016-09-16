import React, { Component } from 'react';
import logo from './logo.png';
import Menu from '../menu/menu';
import { Link } from 'react-router';

export default class AppHeader extends Component {
  constructor(props) {
        super(props);
        this.state = {
            menuActive: '',
            classburger: 'i__burger',
            playActive: '',
            classPlay: 'i__play'
        }
    }
  componentWillReceiveProps(nextProps) {
    this.setState({
      menuActive: '',
      classburger: 'i__burger',
      playActive: '',
      classPlay: 'i__play'
    });
    this.bodyFix(false);
  }
  showMenu = (e) => {
    e.preventDefault();
    this.setState({
      menuActive: this.state.menuActive ? '' : 'active', 
      classburger: this.state.menuActive ? 'i__burger' : 'i__close',
      playActive: '',
      classPlay: 'i__play'
    });
    this.bodyFix(this.state.menuActive ? false : true);
  }
  bodyFix = (e) => {
    // let root = document.documentElement;
    // root.style.overflow = e ? 'hidden' : '';
  }
  showPlay = (e) => {
    e.preventDefault();
    this.setState({
      playActive: this.state.playActive ? '' : 'active',
      classPlay: this.state.playActive ? 'i__play' : 'i__close',
      menuActive: '',
      classburger: 'i__burger'
    });
    this.bodyFix(this.state.playActive ? false : true);
  }
  render() {
    return (
      <div  className="h_header__container">
        <div className="h_header">
          <Link to='/' className="h_header__logo" activeClassName='active'>
          <img src={logo} alt="logo" />
          </Link>
          <div className={"h_header__burger " + this.state.menuActive}><button onClick={this.showMenu}  className={this.state.classburger}></button></div>
          <div className={"h_header__play " + this.state.playActive}><button className={this.state.classPlay} onClick={this.showPlay}></button></div>
        </div>
        <Menu ref="menu" style={"r_menu"} display={this.state.menuActive} />
      </div>
    );
  }
}