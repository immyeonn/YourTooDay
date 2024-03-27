import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/diaries.css';
import Header from '../components/TitleHeader';
import Nav from '../components/Nav';

import profile from '../images/profile.png';

const Diaries = () => {
    const [diaryDetail, setDiaryDetail] = useState(null);
    const { id } = useParams();
    const [profileInfo, setProfileInfo] = useState("소정");

    useEffect(() => {
        const apiUrl = `http://localhost:8080/api/diaries/${id}`;

        // API를 호출하여 일기 상세 정보 가져오기
        axios.get(apiUrl)
            .then(response => {
                setDiaryDetail(response.data);
            })
            .catch(error => {
                console.error('일기 정보를 가져오는 데 실패했습니다.', error);
            });


        setProfileInfo("소정");
    }, [id]);

    return (
        <div>
            <Header />

            <div className="info container">
                <div className="info-text">{diaryDetail ? diaryDetail.diaryCoverName : null}</div>
            </div>

            <div className="profile container">
                <div class="profileimg container">
                    <img src={profile} class="profile-img" />
                </div>
                <div className="profile-text">{profileInfo}</div>
            </div>

            <br /><br />
            <div className="title container">{diaryDetail ? diaryDetail.diaryTitle : null}</div>

            <hr />

            <div className="diarytext container">
                <div className="text2">{diaryDetail ? diaryDetail.diaryContent : null}</div>
            </div>

            <Nav />
        </div>
    );
}

export default Diaries;