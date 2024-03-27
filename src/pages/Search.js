import React, { useState } from 'react';
import '../css/search.css';

import Nav from '../components/Nav';

import search from '../images/icons/search.png';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [diaryList, setDiaryList] = useState([]);
    const [searched, setSearched] = useState(false)

    const searchDiaryCovers = () => {
        const encodedKeyword = encodeURIComponent(searchKeyword);
        fetch(`http://localhost:8080/api/diary-covers/search?keyword=${encodedKeyword}`)
            .then(response => response.json())
            .then(data => {
                console.log('검색 결과:', data);
                setDiaryList(data);
            })
            .catch(error => console.error('검색 중 오류 발생:', error));
    };

    const displaySearchResults = () => {    // 검색했을 때만 이 문구가 나오도록 바꾸기
        if (diaryList.length === 0 && searched) {
            return <p>검색 결과가 없습니다.</p>;
        }

        return diaryList.map(diaryCover => (
            <div className="list" key={diaryCover.diaryCoverNo} onClick={() => goToInnerDiary(diaryCover.diaryCoverNo)}>
                <img src={diaryCover.diaryCoverImage} alt="Diary Cover" />
                <div className="list-text">
                    {diaryCover.diaryCoverName}<br />
                </div>
            </div>
        ));
    };

    const goToInnerDiary = (diaryCoverNo) => {
        window.location.href = `inner-diary.html?diaryCoverNo=${diaryCoverNo}`;
    };

    return (
        <div>
            <div className="search container">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button onClick={searchDiaryCovers}><img src={search} className="search-icon" alt="Search" /></button>
            </div>

            <div className="diary-list container" id="diaryList">
                {displaySearchResults()}
            </div>

            <Nav />
        </div>
    );
}

export default Search;