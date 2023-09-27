import React from 'react';
import {PlanetDetails, PlanetsList} from "../components/sw-components";
import ErrorBoundry from "../components/error-boundry";
import Row from "../components/row-layout/row-layout";

export default class PlanetPage extends React.Component {
    state = {
        selectedItem: null
    }
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const planetsList = (
            <PlanetsList onItemSelected={this.onItemSelected}/>
        )
        const planetDetails = (
            <PlanetDetails itemId={this.state.selectedItem}/>
        )
        return (
            <ErrorBoundry>
                < Row left={planetsList} right={planetDetails}/>
            </ErrorBoundry>
        )
    }
}