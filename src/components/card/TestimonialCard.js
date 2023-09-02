import React, {useState} from 'react';
import './Card.css';

    
const TestimonialCard = ({Data}) =>{
const [st, setSt] = useState('');
const {client, bio, profileImg, msg} = Data;
    
   
return (
<div className='test'>
    <div className='card-wrapper'>
        <div className='msg-body'>

        </div>
        <div className='header'>
            <div className='profile'>{client}</div>
            <div className='client'></div>
            <div className='bio'>{}</div>
        </div>

    </div>
</div>
)
}
    
export default TestimonialCard;