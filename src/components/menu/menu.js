import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Menu extends Component {

  render() {
    let Class = this.props.display ? " " +  this.props.display : " ";
    let Style = this.props.style ? " " + this.props.style : " ";
    return (
          <div className={"n__menu " + Class + Style}>
                <ul>
                    <li><a className="n_item--1" href="#">ВСЕ НОВОСТИ</a></li>
                    <li><a className="n_item--2" href="#">СПОРТ</a></li>
                    <li><a className="n_item--3" href="#">В РОССИИ</a></li>
                    <li><a className="n_item--4" href="#">КРИМИНАЛ</a></li>
                    <li><a className="n_item--5" href="#">В МИРЕ</a></li>
                    <li><a className="n_item--6" href="#">ШОУ-БИЗНЕС</a></li>
                    <li><a className="n_item--7" href="#">ПОЛИТИКА</a></li>
                    <li><a className="n_item--8" href="#">В РОССИИ</a></li>
                    <li><a className="n_item--9" href="#">ЗДОРОВЬЕ</a></li>
                    <li><a className="n_item--10" href="#">ДЕНЬГИ</a></li>
                </ul>
          </div>
    );
  }
}
