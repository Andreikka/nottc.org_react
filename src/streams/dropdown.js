import React from 'react';
import Select from 'react-select';

const options = [
    {
        value: 'Season8',
        label: 'Season 8'
    }, {
        value: 'Season7',
        label: 'Season 7'
    }, {
        value: 'Season6',
        label: 'Season 6'
    }, {
        value: 'Season5',
        label: 'Season 5'
    }, {
        value: 'Season4',
        label: 'Season 4'
    }, {
        value: 'Season3',
        label: 'Season 3'
    }, {
        value: 'Season2',
        label: 'Season 2'
    }, {
        value: 'Season1',
        label: 'Season 1'
    }
];

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            options: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/streams")
            .then(res => res.json())
            .then((result) => {
                this.setState({isLoaded: true, items: result.items});
            },
            // Note: it's important to handle errors here instead of a catch() block so that
            // we don't swallow exceptions from actual bugs in components.
            (error) => {
                this.setState({isLoaded: true, error});
            })
    }

    state = {
        selectedOption: options[0],
        isLoading: true,
        isDisabled: true,
        isSearchable: false
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const {
            selectedOption,
            isSearchable,
            error,
            isLoaded,
            items,
            isLoading
        } = this.state;
        return (

            <div className="col-md-4">

                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isFocused={false}
                    isLoading={true}
                    isSearchable={isSearchable}/>
            </div>
        );
    }
}

export default Dropdown;