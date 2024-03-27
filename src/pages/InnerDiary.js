import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/innerdiary.css';
import Header from '../components/TitleHeader';
import Nav from '../components/Nav';

import diaryLists from '../images/icons/diary-list.png';
import gotoWriteBtn from '../images/icons/goto-write-btn.png';


const InnerDiary = () => {
    const [diaryCoverDetail, setDiaryCoverDetail] = useState(null);
    const [diaryCoverName, setDiaryCoverName] = useState("");
    const [diaryList, setDiaryList] = useState([]);
    const { diaryCoverNo } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:8080/api/diary-covers/${diaryCoverNo}`;

        axios.get(apiUrl)
            .then(response => {
                const data = response.data;
                setDiaryCoverDetail(data);
                setDiaryCoverName(data.diaryCoverName);
                setDiaryList(data.diaries);
            })
            .catch(error => {
                console.error('일기장 정보를 가져오는 데 실패했습니다.', error);
            });
    }, [diaryCoverNo]);

    const openDiary = (index) => {
        window.location.href = `diaries.html?id=${index}&diaryCoverName=${diaryCoverName}`;
    };

    const openWrite = () => {
        window.location.href = `write.html?diaryCoverNo=${diaryCoverNo}&diaryCoverName=${diaryCoverName}`;
    };

    const getDiaryHtml = (title, date, index) => {
        return (
            <div className="list" onClick={() => openDiary(index)}>
                <img src={diaryLists} />
                <div className="list-text">
                    {title}<br />
                    <div className="name">{date}</div>
                </div>
                <hr />
            </div>
        );
    };

    return (
        <div>
            <Header />

            <div className="diarycover container">
                <div className="info-img"><img src={diaryCoverDetail ? diaryCoverDetail.diaryCoverImage : ''} id="coverImg" /></div>
            </div>

            <div className="goto-write container">
                <button className="goto-write-btn" onClick={openWrite}>
                    <img src={gotoWriteBtn} />
                </button>
            </div>

            <div className="diary-list container">
                {diaryList.map((diary, index) => getDiaryHtml(diary.diaryTitle, diary.diaryDate, index))}
            </div>

            <Nav />
        </div>
    );
}

export default InnerDiary;