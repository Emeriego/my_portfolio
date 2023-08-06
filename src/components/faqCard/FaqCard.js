import React, { useState } from 'react';
import './FaqCard.css';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const FaqCard = ({faqitem}) => {
    const [openFaq, setOpenFaq] = useState(false);


  return (
    <div className='faq-container' onClick={() => setOpenFaq(prev => !prev)}>
        <div className='faq-header'>
            <div className='faq-question'><h3>{faqitem.question} </h3></div>
            <div className='faq-toggle-btns'>
 {/** ####### pleaase NOTE that if you want to set state on a click event, you must either create a function for the action
  * or declare an anonymouse function like what i just did below.. setting it directly triggers errors
  */}

                <button className='toggle-btn' >
                    {
                    openFaq? 
                    <AiOutlineMinus />
                    :
                    <AiOutlinePlus />
                    }
                </button>
                
            </div>

        </div>
        <div className='faq-answer'>
            <p>
                {openFaq && faqitem.answer}
            </p>
        </div>
    </div>
  )
}

export default FaqCard;