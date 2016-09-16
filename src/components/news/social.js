import React, { Component } from 'react';
import Config from '../../Config';
import { FacebookButton, VKontakteButton, EmailButton, TwitterButton } from "react-social";

export default class Social extends Component {
    render() {
        let url = location.href;
      return (
        <div className="n_social">
            <VKontakteButton className="n_social--vk" url={url}>VKontakte</VKontakteButton>
            <FacebookButton  className="n_social--fb" url={url} appId={Config.appId}>Facebook</FacebookButton>
            <TwitterButton   className="n_social--tw" url={url}>Twitter</TwitterButton>
            <EmailButton     className="n_social--mail" url={url}>Email</EmailButton>
        </div>
      )
    }
}