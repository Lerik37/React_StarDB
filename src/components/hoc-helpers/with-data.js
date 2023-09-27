import React from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (Wrapped) => {
    return class extends React.Component {
        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
        }


        render() {
            const {data, loading, error} = this.state;
            if (loading) {
                return <Spinner/>
            } else if (error) {
                return <ErrorIndicator/>
            }
            return (
                <Wrapped {...this.props} data={data}/>
            )
        }
    }
}
export default withData;
