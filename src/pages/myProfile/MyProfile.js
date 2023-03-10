import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
    ProfileContainer,
    WrapProfilePhoto,
    MyPlanContainer,
    SmallTitle,
    WrapCards,
    WrapCard,
    WrapMenuContainer,

} from './MyProfileStyle';
import TitleHeader from '../../components/titleHeader/TitleHeader';

import tempProfile from '../../asset/profile/tempProfile.jpeg';
import settingButton from '../../asset/profile/setting.png';
import arrow from '../../asset/arrow.png';

export default function MyProfile() {

    const [myInfo, setMyInfo] = useState([]);
    
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/auth/me', {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            setMyInfo(response.data);
            console.log(myInfo);
        });
    }, []);



    const myPlanCards = [
        '2박 3일 경주 여행',
        '1박 2일 부산 여행',
        '가을 여행',
    ]

    //프로필 편집
    const navigate = useNavigate();
    const routerMyPlan = () => {
        navigate('/view/myplan')
        window.scrollTo(0, 0)
    }

    return (
        <>
            <TitleHeader title="마이페이지" />

            <ProfileContainer>
                <WrapProfilePhoto>
                    <img className='photo' src={tempProfile} />
                </WrapProfilePhoto>
                <div>
                    <h4 className='user-name'>{myInfo.nickname}</h4>
                    <div className="tag-div">페스코</div>
                </div>
                <img className='setting-btn' src={settingButton} />
            </ProfileContainer>

            <MyPlanContainer>
                <div className="wrap-title">
                    <SmallTitle>나의 플랜</SmallTitle>
                    <span onClick={routerMyPlan}>
                        <span>플랜 전체보기</span>
                        <img src={arrow} className='arrow-btn' />
                    </span>
                </div>

                <WrapCards>
                    {
                        myPlanCards.map((value, index) => {
                            return (
                                <WrapCard>
                                    <img className='img-photo'/>
                                    <div className='div-content'>
                                        <span className='plan-title'>{value}</span>
                                    </div>
                                </WrapCard>
                            )
                        })
                    }
                </WrapCards>
            </MyPlanContainer>

            <WrapMenuContainer>
                <div className='menu'>최근 본 가이드<img src={arrow} className='arrow-btn'/></div>
                <div className='menu'>최근 본 식당<img src={arrow} className='arrow-btn'/></div>
                <div className='menu'>작성한 후기<img src={arrow} className='arrow-btn'/></div>
                <div className='menu'>로그아웃<img src={arrow} className='arrow-btn'/></div>
                <div className='menu'>버전<span>1.0.0</span></div>
            </WrapMenuContainer>

        </>
    );
}