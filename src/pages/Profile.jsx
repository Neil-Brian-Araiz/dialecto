import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { MdPersonOutline } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import IconButton from '../components/shared/IconBtn';
import Button from '../components/shared/Btn';
import SettingIcon from '../assets/setting.png';
import FAQIcon from '../assets/faq.png'
import './page.css';

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
    <div className='profile-wrapper'>
        <div className='profile-header'>
            <button onClick={() => navigate(-1)}>
                <FaChevronLeft />
            </button>
            <h4>Account</h4>
        </div>

        <div className='profile-section'>
            <div className='prof-sec-header'>
                <div className='prof-icon'>
                    <MdPersonOutline />
                </div>
                <div className='prof-name'>
                    <span>Neil Brian Araiz</span>
                    <span>neilbrianaraiz@gmail.com</span>
                </div>
            </div>
            <button>Edit Profile</button>
        </div>
        <div className='prof-sec-nav'>
            <div className='prof-nav'>
                <IconButton imageUrl={SettingIcon} label='Settings' bgColor='var(--primary-color)' width='250px' />
                <IconButton imageUrl={FAQIcon} label='FAQs' bgColor='var(--primary-color)' width='250px' />
            </div>

            <Link to='/dialecto'>
                <Button label='Log out' outline={false} bgColor='var(--secondary-color)' width='250px' />
            </Link>
        </div>
    </div>
    )
}

export default ProfilePage;
