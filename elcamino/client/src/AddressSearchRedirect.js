import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _rightchevron from './graphics/rightchevron.png'

export function AddressSearchRedirect({isInClaytonCounty}) {
    const [displayedString, setDisplayedString] = useState(0);
    const isFirstRender = useRef(true);
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
                <p className='home__asr--notinclayton'>This address is within Morrow City Limits</p>
                <p>Your project appears to be located outside of Clayton County's Jurisdiction</p>
                <a className="link" href='https://www.jonesboroga.com/OfficeOfTheCityManager.aspx'>
                    <h2>City of Jonesboro Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'LOVEJOY'){
        return (
            <div>
                <p className='home__asr--notinclayton'>This address is within Lovejoy City Limits</p>
                <a className="link" href='https://www.cityoflovejoy.com/936/Permits'>
                    <h2>City of Lovejoy Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'LAKE CITY'){
        return (
            <div>
                <p className='home__asr--notinclayton'>This address is within Lake City's Limits</p>
                <a className="link" href='https://lakecityga.net/departments-permitapplications.asp'>
                    <h2>Lake City Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'RIVERDALE'){
        return (
            <div>
                <p className='home__asr--notinclayton'>This address is within Riverdale City Limits</p>
                <a className="link" href='https://www.riverdalega.gov/470/Permitting-Services'>
                    <h2>City of Riverdale Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'MORROW'){
        return (
            <div>
                <p className='home__asr--notinclayton'>This address is within Morrow City Limits</p>
                <a className="link" href='https://www.cityofmorrow.com/government-cityhall-permitsforms.asp'>
                    <h2>City of Morrow Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'FOREST PARK'){
        return (
            <div>
                <p className='home__asr--notinclayton'>This address is within Forest Park City Limits</p>
                <a className="link" href='https://www.forestparkga.gov/planning/page/permits-and-applications'>
                    <h2>City of Forest Park Permits</h2>
                </a>
            </div>
        );
    }
    else if(isInClaytonCounty === 'UNINCORPORATED'){
        return (
        <div className='home__asr'>
            <h3 className='home__asr--inclayton'>You are in Unincorporated Clayton County.</h3>
            {/* <p>We can direct where you need to go.</p> */}
            {/* <p>Answer a few questions and you will be linked to either documentation or an application</p> */}
            <button className="home__asr--continue-button" onClick={() => {return navigate('/Assistant')}}>
                <h2>Continue to the Permit Assistant</h2>
            </button>
        </div>

        );
    }
}


