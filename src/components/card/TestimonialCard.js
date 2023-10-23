import React, {useState} from 'react';
import './Card.css';

    
const TestimonialCard = ({testy, index}) =>{
const [st, setSt] = useState('');
const {client, bio, profileImg, msg} = testy;
    
   
return (
<div className='test'>
    <div className='card-wrappe'>
        <div className='msg-body'>

        </div>
        <div className='header'>
            <div className='profile'>{client}</div>
            <div className='client'>{bio}</div>
            <div className='bio'>{msg}</div>
        </div>

    </div>
</div>
)
}
    
export default TestimonialCard;