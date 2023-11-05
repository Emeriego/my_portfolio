import React, {useState} from 'react';
import './Card.css';

    
const TestimonialCard = ({testy, index}) =>{
const [st, setSt] = useState('');
const {name, client, about, profileImg, msg} = testy;
    
   
return (
<div className={index % 2 != 0? 'testimonial' : 'testimonial'}>
    <div className='card-wrapper'>
        <div className='msg-body'>
            <div className='qt'>"</div>
            <p>
                He is reliable. Delivers services profesionally and on time. I'll recommend him.

            </p>

        </div>
        <div className = 'divd'></div>
        <div className='header-1'>
            <div className='cust-img'>
                <img className = 'photo' src= {`../../images/${profileImg}`}/>
            </div>
            <div className='details'>
                <div className='client-name'>{name}</div>
                <div className='pos-comp'>
                    <span className='pos'>{about}</span>
                    <span> - </span>
                    <span className='comp'>{client}</span>
                </div>
            </div>
        </div>

    </div>
</div>
)
}
    
export default TestimonialCard;
