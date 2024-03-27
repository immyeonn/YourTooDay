import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/main.css';

import Header from '../components/TitleHeader';
import Nav from '../components/Nav';

const Main = () => {
    const REST_API_KEY = "90948feb4d923809c73dd667a2ba1e33";
    const kakaoTokenApiUrl = "https://kauth.kakao.com/oauth/token";
    const kakaoUserApiUrl = "https://kapi.kakao.com/v2/user/me";
    const redirectUrl = "http://127.0.0.1:5501/main.html";

    const [user, setUser] = useState(null);

    useEffect(() => {
        const urlParams = new URL(window.location.href).searchParams;
        const code = urlParams.get('code');

        if (code) {
            const token = getKakaoToken(code);
            getKakaoUserInfo(token);
        }
    }, []);

    const getKakaoToken = (code) => {
        let token = "";

        const data = {
            "grant_type": "authorization_code",
            "client_id": REST_API_KEY,
            "redirect_uri": redirectUrl,
            "code": code,
        };

        axios.post(kakaoTokenApiUrl, data)
            .then(response => {
                token = response.data.access_token;
                console.log(token);
                return token;
            })
            .catch(error => console.error(error));

        return token;
    }

    const getKakaoUserInfo = (token) => {
        axios.get(kakaoUserApiUrl, {
            params: {
                "secure_resoruce": true
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': `application/x-www-form-urlencoded;charset=utf-8`,
            }
        })
            .then(response => {
                console.log(response.data);
                setUser(response.data); // user 상태를 설정합니다.
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Header />

            <div className="main-text container">
                <div>이평야 님의 일기장</div>
            </div>

            <div className="scroll container">
                <div className="my-diary container">
                    <div className="text">my_today
                        <img src="./images/icons/edit.png" alt="Edit Icon" />
                    </div>

                    <div className="diary-cover container">
                        {/* Diary cover content */}
                    </div>
                </div>
            </div>

            <Nav />
        </div>
    );
}

export default Main;