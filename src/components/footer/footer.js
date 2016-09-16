import React, { Component } from 'react';
import Menu from '../menu/menu';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="n_footer">
            <Menu ref="menu" style={"n_footer__menu"} />
                <div className="n_footer__social">
                    <ul>
                        <li><a target="_blank" className="n_footer__social--vk"  href="http://vk.com/rentvchannel"></a></li>
                        <li><a target="_blank" className="n_footer__social--fb"  href="https://www.facebook.com/rentvchannel"></a></li>
                        <li><a target="_blank" className="n_footer__social--tw"  href="https://twitter.com/rentvchannel"></a></li>
                        <li><a target="_blank" className="n_footer__social--yb"  href="http://youtube.com/rentvchannel"></a></li>
                        <li><a target="_blank" className="n_footer__social--ins" href="http://instagram.com/rentvchannel"></a></li>
                        <li><a target="_blank" className="n_footer__social--ok"  href="http://www.odnoklassniki.ru/rentv"></a></li>
                        <li><a target="_blank" className="n_footer__social--gp"  href="https://plus.google.com/110568841819755425224/posts"></a></li>
                    </ul>
                </div>
                <div className="n_footer__godescktop">
                    <a href="#">Полная версия сайта</a>
                </div>
                <div className="n_footer__copy">
                    <span>© 2014 Телеканал РЕН ТВ</span><div className="n_footer__godescktop--l">|</div><a href="">Контакты</a>
                </div>
            </div>
            );  
    }
}
