import { AddressSearchRedirect } from "./AddressSearchRedirect"
import { Card, Text, Spacer, Grid, Button, Row } from "@nextui-org/react";
import { ZeroAddress } from "./ZeroAddress";


export function AddressSearch({addrNum, isInClaytonCounty, zone, parcelID}) {

    if(addrNum === 0){ // This checks if Address is a 0, 
        return(
            <>
            <ZeroAddress />
            </>
        )
    }
    else {
        return(
            <AddressSearchRedirect isInClaytonCounty={isInClaytonCounty} zone={zone} />
        )
    }
}