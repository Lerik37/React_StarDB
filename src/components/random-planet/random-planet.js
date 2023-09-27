import React from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import propTypes from 'prop-types';

export default class RandomPlanet extends React.Component {
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true
    };
    static defaultProps = {
       updateInterval: 10000
    };
    static propTypes = {
updateInterval: propTypes.number
    };

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    render() {
        const {
            planet: {
                id, name, population,
                rotationPeriod, diameter
            }, loading, error
        } = this.state

        if (loading) {
            return <Spinner/>
        } else if (error) {
            return <ErrorIndicator/>
        }
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}