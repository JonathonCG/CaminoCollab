import { useEffect, useRef, useState } from 'react';
import turstone from 'turnstone'
import { TurnstoneSearch } from './elements/Searchbox';

export function AddressSearchRedirect({isInClaytonCounty}) {
    const [displayedString, setDisplayedString] = useState(0);
    const isFirstRender = useRef(true);
    const outOfJurisdiction = "Go somewhere else"
    const inJurisdiction = "ding ding you've found it"
    useEffect(() => {
        console.log('in use effecccccctt')
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // 👈️ return early if first render
          }
        setDisplayedString(isInClaytonCounty ? inJurisdiction : outOfJurisdiction);
        console.log('useEffect logic ran');
    }, [isInClaytonCounty]);

    return (
        <div>
        {displayedString}
        </div>
    );
}