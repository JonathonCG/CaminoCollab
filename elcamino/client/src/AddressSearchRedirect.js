import { defaults } from 'autoprefixer';
import { useEffect, useRef, useState } from 'react';
import turstone from 'turnstone'
import { TurnstoneSearch } from './elements/Searchbox';
import { useNavigate } from 'react-router-dom';
import _rightchevron from './graphics/rightchevron.png'

export function AddressSearchRedirect({isInClaytonCounty}) {
    const [displayedString, setDisplayedString] = useState(0);
    const isFirstRender = useRef(true);
    const outOfJurisdiction = "Go somewhere else"
    const inJurisdiction = "ding ding you've found it"
    const Jonesboro = "https://www.jonesboroga.com/OfficeOfTheCityManager.aspx"
    let displayMessage = '';
    const navigate = useNavigate();
    useEffect(() => {
        console.log('in use effecccccctt')
        if (isFirstRender.current) {
            isFirstRender.current = false;
            
            return; // 👈️ return early if first render
          }
        // setDisplayedString();
    }, [isInClaytonCounty]);

        console.log('outside the effect'+displayMessage)


    if(isInClaytonCounty === 'JONESBORO'){
    return ( 
        <p className='notinclayton'>You are in Jonesboro</p>
        );
    }
    else if(isInClaytonCounty === 'LOVEJOY'){
        return (
        <p className='notinclayton'>You are in LOVEJOY</p>
        );
    }
    else if(isInClaytonCounty === 'LAKE CITY'){
        return (
        <p className='notinclayton'>You are in Lake City</p>
        );
    }
    else if(isInClaytonCounty === 'RIVERDALE'){
        return (
        <p className='notinclayton'>You are in Riverdale</p>
        );
    }
    else if(isInClaytonCounty === 'MORROW'){
        return (
        <p className='notinclayton'>You are in Morrow</p>
        );
    }
    else if(isInClaytonCounty === 'FOREST PARK'){
        return (
        <p className='notinclayton'>You are in Forest Park</p>
        );
    }
    else if(isInClaytonCounty === 'UNINCORPORATED'){
        return (
        <div className='addresssearchredirect'>
        <h3 className='inclayton'>You are in Unincorporated Clayton County.</h3>
        <p>We can direct where you need to go.</p>
        <p>Please answer a few questions and you will be linked to either documentation or an application</p>
        <button className="continuebutton" onClick={() => {return navigate('/Wizard')}}><h2>Continue to the Permit Wizard</h2></button>
        </div>

        );
    }
}


