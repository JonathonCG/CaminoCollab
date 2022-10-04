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
        <div>
        <p className='notinclayton'>You are in Jonesboro</p>
        <p>Your project appears to be located outside of Clayton County's Jurisdiction</p>
        <a className="" href='https://www.jonesboroga.com/OfficeOfTheCityManager.aspx' target='blank'><h2>Go to the City of Jonesboro website</h2></a>
            </div>
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
            <div>
        <p className='notinclayton'>You are in Forest Park</p>
        <button className="continuebutton" onClick={() => {return navigate('https://www.forestparkga.gov/')}}><h2>Go to the City of Forest Park website</h2></button>https://www.jonesboroga.com/OfficeOfTheCityManager.aspx
            </div>
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


