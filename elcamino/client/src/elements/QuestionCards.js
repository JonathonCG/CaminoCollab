import React, { useState } from 'react'
import { Questions, QuestionGroups } from './QuestionCardsInfo'
import rightchevron from '../graphics/icons8-chevron-right-50.png';
import { useNavigate } from 'react-router-dom';


//Draws the question cards on the screen based on the QuestionGroups array in QuestionCardsInfo.js
export function Cards() {
    const [value, setValue] = useState(0); //standard function component state changing 
    const navigate = useNavigate();
    
    let crumbs = [1,2,3];
    return (
        
        <div className='assistant__optiongrid'>
        {/* <p>Page: {value + 1} of {QuestionGroups.length}</p> */}
        {/* ~~this is where the back button should be rendered~~ */}
         <ul>{
            QuestionGroups[value].map(cardList=>( //Maps the QuestionGroups array
                //Key to keep items organized per React rules
                <li 
                className="questionListItems"
                key={Questions[cardList].id}> 
                    <button 
                        className="assistant__cards" //CSS class
                        //onClick function that changes the state to the ID of the question displayed.
                        onClick={()=>{
                            const paramID = '/nextsteps/' + Questions[cardList].id;
                            console.log(Questions[cardList].nextPage);
                            if(Questions[cardList].endpage){
                                return navigate(paramID);
                            }
                            else{
                                return setValue((Questions[cardList].nextPage))
                            }
                           }}>
                        
                        <div className='assistant__cards-image'><img src={Questions[cardList].icon}></img></div>
                        <div className='assistant__cards-text'><h3>{Questions[cardList].questionText}</h3>{/*- to page {Questions[cardList].nextPage + 1}*/}</div>
                        <div className='assistant__cards-icon'><img src={rightchevron}></img></div>
                    </button>
                </li>
                ))
         }</ul>  
         <button className='assistant__back-button' onClick={() => {return navigate('/')}}>Back to start</button>
         </div>
         )   
}