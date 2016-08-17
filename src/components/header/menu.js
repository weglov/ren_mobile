import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Menu extends Component {

  render() {
    return (
          <div className={"r_menu " + this.props.display}>
	          <ul>
		          <li className="r_menu__link"><Link to='/' activeClassName='active'>ТВ Программа</Link></li>
		          <li className="r_menu__link"><Link to='/novosti/p/119292' activeClassName='active'>Новости</Link></li>
		          <li className="r_menu__link"><Link to='/' activeClassName='active'>Проекты</Link></li>
		          <li className="r_menu__link"><Link to='/' activeClassName='active'>Мнения</Link></li>
	          </ul>
          </div>
    );
  }
}
