import { AddressSearchRedirect } from "./AddressSearchRedirect"
import { ZeroAddress } from "./ZeroAddress";


export function AddressSearch({addrNum, addr, isInClaytonCounty, zone}) {

    // This checks if Address is a 0, 
    if(addrNum === 0){ 
        return(
            <>
            <ZeroAddress />
            </>
        )
    }
    // If not 0, continue to AddressSearchRedirect
    else {
        return(
            <AddressSearchRedirect addr={addr} isInClaytonCounty={isInClaytonCounty} zone={zone} /> 
        )
    }
}