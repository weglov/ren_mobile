import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Menu extends Component {

  render() {
    let Class = this.props.display ? " " +  this.props.display : " ";
    let Style = this.props.style ? " " + this.props.style : " ";
    return (
          <div className={"n__menu " + Class + Style}>
                <ul>
                    <li><Link className="n_item--1"  to="/novosti/r/5">ВСЕ НОВОСТИ</Link></li>
                    <li><Link className="n_item--2"  to="/novosti/r/19692">СПОРТ</Link></li>
                    <li><Link className="n_item--3"  to="/novosti/r/5">В РОССИИ</Link></li>
                    <li><Link className="n_item--4"  to="/novosti/r/20">КРИМИНАЛ</Link></li>
                    <li><Link className="n_item--5"  to="/novosti/r/6">В МИРЕ</Link></li>
                    <li><Link className="n_item--6"  to="/novosti/r/11">ШОУ-БИЗНЕС</Link></li>
                    <li><Link className="n_item--7"  to="/novosti/r/19691">ПОЛИТИКА</Link></li>
                    <li><Link className="n_item--9"  to="/novosti/r/26640">ЗДОРОВЬЕ</Link></li>
                    <li><Link className="n_item--10" to="/novosti/r/19">ДЕНЬГИ</Link></li>
                </ul>
          </div>
    );
  }
}
