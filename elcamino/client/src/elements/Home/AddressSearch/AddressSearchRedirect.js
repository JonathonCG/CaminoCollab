import { useEffect, useRef } from 'react';
import { IncorpAddress } from './IncorpAddress';
import { UnincorpAddr } from './UnincorpAddress';

export function AddressSearchRedirect({addr, isInClaytonCounty, zone}) {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            
            return; // 👈️ return early if first render
          }
    }, [isInClaytonCounty], [zone]);

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      };


    if(isInClaytonCounty === ''){

        return;
    }
    else if(isInClaytonCounty === 'UNINCORPORATED'){
        return (
            <UnincorpAddr addr={addr} zone={zone} />
        );
    }
    else if(isInClaytonCounty === 'COLLEGE PARK' || 'FOREST PARK' || 'LAKE CITY' || 'LOVEJOY' || 'JONESBORO' || 'RIVERDALE' ) {
        const city = titleCase(isInClaytonCounty)
        return(
            <IncorpAddress city={city} />
        );
    };
}