import React from 'react';
import {PeopleList, PersonDetails} from "../components/sw-components";
import Row from "../components/row-layout/row-layout";
import ErrorBoundry from "../components/error-boundry";

export default class PersonPage extends React.Component {

    state = {
        selectedItem: null
    }
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const peopleList = (
            <PeopleList onItemSelected={this.onItemSelected}/>
        )
        const personDetails = (
            <PersonDetails itemId={this.state.selectedItem}/>
        )


        return (
            <ErrorBoundry>
                <Row left={peopleList} right={personDetails}/>
            </ErrorBoundry>
        )
    }
}