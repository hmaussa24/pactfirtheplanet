import axios from "axios";
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }


    componentClicked = () => console.log('click');

    responseFacebook = response => {
        console.log(response)
        if (response.status === "unknown") {

        } else {
            this.setState({
                isLoggedIn: true,
                userID: response.userID,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url

            })

            this.guardat(this.state)


        }
        return (
            <FacebookShareButton
                url={"http://pactfortheplanet.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#PactForThePlanet"
                className='compartir'
            >
                <FacebookIcon size={36} /> <h6>Facebook </h6>
            </FacebookShareButton>)
    }

    guardat = async (data) => {
        await axios.post('http://127.0.0.1:4500/registro', data)
            .then(response => {
                if (response.data.status) {
                    console.log('ok')
                } else {
                    console.log('error')
                }
            }, error => {
                console.log('error')
            })
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '100%',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} ></img>
                    <h2>Welcome: {this.state.name}</h2>
                email: {this.state.email}
                    <p>

                        <FacebookShareButton
                            url={"http://pactfortheplanet.com"}
                            quote={"CampersTribe - World is yours to explore"}
                            hashtag="#PactForThePlanet"
                            className='compartir'
                        >
                            <FacebookIcon size={36} /> <h6>Facebook </h6>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"http://pactfortheplanet.com"}
                            quote={"CampersTribe - World is yours to explore"}
                            hashtag="#PactForThePlanet"
                            className='compartir'
                        >
                            <TwitterIcon size={36} /> <h6>Twitter </h6>
                        </TwitterShareButton>
                    </p>

                </div>)
        } else {
            fbContent = (<FacebookLogin
                appId="2767623910165789"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                textButton='Firmar con Facebook'
                size='medium' />)
        }
        return (

            <div className='boton'>
                {fbContent}
            </div>
        )
    }
}