import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list";
import React from 'react';
import withSwapiService from "../hoc-helpers/with-swapi-service";

const WithChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}
const mapPeopleMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const renderName = ({name}) => <span>{name}</span>;
const renderStarshipName = ({name, model}) => <span>{name} ({model})</span>;

const PeopleList = withSwapiService(
    withData(
        WithChildrenFunction(ItemList, renderName)),
    mapPeopleMethodsToProps)
const PlanetsList = withSwapiService(
    withData(
        WithChildrenFunction(ItemList, renderName)),
    mapPlanetsMethodsToProps)
const StarshipsList = withSwapiService(
    withData(
        WithChildrenFunction(ItemList, renderStarshipName)),
    mapStarshipsMethodsToProps)


export {
    PeopleList,
    PlanetsList,
    StarshipsList
}