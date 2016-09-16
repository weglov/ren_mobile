import React, { Component } from 'react';
import logo from './logo.png';
import Menu from '../menu/menu';
import { Link } from 'react-router';
import Search from '../search/search_box';

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
  }
  showMenu = (e) => {
    e.preventDefault();
    this.setState({
      menuActive: this.state.menuActive ? '' : 'active', 
      classburger: this.state.menuActive ? 'i__burger' : 'i__close',
      playActive: '',
      classPlay: 'i__play'
    });
  }
  showPlay = (e) => {
    e.preventDefault();
    this.setState({
      playActive: this.state.playActive ? '' : 'active',
      classPlay: this.state.playActive ? 'i__play' : 'i__close',
      menuActive: '',
      classburger: 'i__burger'
    });
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
        <div className={this.state.menuActive + " r_menu"}>
          <Search display={this.state.menuActive} />
          <Menu ref="menu" style={" "} display={this.state.menuActive} />
        </div>
      </div>
    );
  }
}