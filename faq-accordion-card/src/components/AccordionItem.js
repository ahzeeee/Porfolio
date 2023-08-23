import React, {useState} from "react";

const AccordionItem = ({ title, content }) => {

    const [isActive, setIsActive] = useState (false);

    return (
 
        <div className='accordion-item'>
                <div 
                    className='accordion-header'
                    onClick={() => setIsActive(!isActive)}
                >
                    <button className='accordion-button collapsed' id='accordionButton' type='button'>{title}</button>
                </div>
                {isActive && <div className="accordion-body">{content}</div>}
        </div>
    
    );
};

export default AccordionItem;