import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { VscDiscard } from "react-icons/vsc";

const TittleHeader = () => {
    const [diaryCoverDetail, setDiaryCoverDetail] = useState(null);
    const [diaryCoverName, setDiaryCoverName] = useState("");
    const { diaryCoverNo } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:8080/api/diary-covers/${diaryCoverNo}`;

        axios.get(apiUrl)
            .then(response => {
                const data = response.data;
                setDiaryCoverDetail(data);
                setDiaryCoverName(data.diaryCoverName);
            })
            .catch(error => {
                console.error('일기장 정보를 가져오는 데 실패했습니다.', error);
            });
    }, [diaryCoverNo]);

    return (
        <div style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '25px',
            marginLeft: '30px',

            display: 'flex',
            justifyContent: 'space-between'
        }}>
            카카오
            {/* <div className="info-text">{diaryCoverDetail ? diaryCoverDetail.diaryCoverName : null}</div> */}
            <VscDiscard />
        </div>
    );
}

export default TittleHeader;