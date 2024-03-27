import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/TitleHeader';

import '../css/write.css';

import img from '../images/icons/tool-img.png';
import font from '../images/icons/tool-font.png';
import line from '../images/icons/tool-line.png';

const Write = () => {
    const { diaryCoverName, diaryCoverNo } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        document.title = diaryCoverName || 'Write';
    }, [diaryCoverName]);

    const saveData = () => {
        const requestData = {
            diaryTitle: title,
            diaryContent: content,
            diaryCoverNo: diaryCoverNo
        };

        fetch("http://localhost:8080/api/diaries", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    alert('일기가 정상적으로 등록되었습니다!');
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error(error);
                alert('에러');
            });
    };


    return (
        <div>
            <Header />

            <div className="info container">
                <div className="info-text">{diaryCoverName}</div>
            </div>

            <div className="write container">
                <input type="text" className="write-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요" />
                <textarea className="write-content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="오늘 하루는 어떠셨나요?"></textarea>
            </div>

            <div className="tool container">
                <input type="button" className="tool-img-btn" /><img src={img} alt="Tool Image" />
                <input type="button" className="tool-font-btn" /><img src={font} alt="Tool Font" />
                <input type="button" className="tool-line-btn" /><img src={line} alt="Tool Line" />
                <button type="submit" className="diary-post-btn" onClick={saveData}>게시</button>
            </div>

            <Nav />

        </div>
    );
}

export default Write;