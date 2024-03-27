import React from "react";
import '../css/login.css';

import logo from '../images/logo.png';
import kakaoButton from '../images/kakao-bt.png';
import naverButton from '../images/naver-bt.png';

const REST_API_KEY = "90948feb4d923809c73dd667a2ba1e33";
const kakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize";
const redirectUrl = "http://localhost:3000/";

function moveKakaoLogin() {
    window.location.href = `${kakaoLoginUrl}?client_id=${REST_API_KEY}&redirect_uri=${redirectUrl}&response_type=code`;
}

const Login = () => {
    return (
        <div className="login">
            <div className="text container">
                <div className="text1">당신의 하루에 공감을 +</div>
                <div className="text2">YourTooDay</div>
            </div>

            <div className="logo container">
                <img src={logo} className="img" alt="logo" />
            </div>

            <div className="text3">'당신의 하루를 공유해주세요'</div>

            <div className="btn container">
                <button onClick={moveKakaoLogin}><img src={kakaoButton} className="kakaobtn" alt="kakao" /></button>
                <img src={naverButton} className="naverbtn" alt="naver" />
            </div>
        </div>
    );
}

export default Login;