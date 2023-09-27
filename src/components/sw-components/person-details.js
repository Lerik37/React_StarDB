import ItemDetails, {Record} from "../item-details";
import React from "react";
import WithSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="name" label="Name"/>
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birth year"/>
            <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}
export default WithSwapiService(PersonDetails, mapMethodsToProps);