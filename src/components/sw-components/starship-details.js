import ItemDetails, {Record} from "../item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapi-service";

const StarshipDetails = ( props ) => {
    return (
        <ItemDetails {...props}>

            <Record field="name" label="Name"/>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="crew" label="Crew"/>
            <Record field="passengers" label="Passengers"/>
            <Record field="cargoCapacity" label="Cargo capacity"/>

        </ItemDetails>
    )
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default WithSwapiService(StarshipDetails, mapMethodsToProps);