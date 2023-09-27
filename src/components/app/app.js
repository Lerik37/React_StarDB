import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider} from "../../swapi-service-context";
import SwapiService from "../../services";
import PersonPage from "../../pages/person-page";
import PlanetPage from "../../pages/planet-page";
import StarshipPage from "../../pages/starship-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default class App extends React.Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <RandomPlanet/>
                        <Routes>
                            <Route path="/" element={<h2>Welcome to StarDB!</h2>}/>
                            <Route path="/people/" element={<PersonPage/>}/>
                            <Route path="/planets/" element={<PlanetPage/>}/>
                            <Route path="/starships/" element={<StarshipPage/>}/>
                            <Route path="*" element={ <h2>This page is not found:(</h2>} />
                        </Routes>
                    </div>

                </BrowserRouter>
            </SwapiServiceProvider>
        );
    };
};