import React from 'react';
import {StarshipDetails, StarshipsList} from "../components/sw-components";
import Row from "../components/row-layout/row-layout";
import ErrorBoundry from "../components/error-boundry";

export default class StarshipPage extends React.Component {
    state = {
        selectedItem: null
    }
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const starshipsList = (
            <StarshipsList onItemSelected={this.onItemSelected}/>
        )
        const starshipDetails = (
            <StarshipDetails itemId={this.state.selectedItem}/>
        )

        return (
            <ErrorBoundry>
                < Row left={starshipsList} right={starshipDetails}/>
            </ErrorBoundry>
        )
    }
}