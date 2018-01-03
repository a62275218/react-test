import React from 'react';
import Spinner from '../img/Spinner.svg';
import ListCard from '../Card/ListCard'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            list: [],
            male: [],
            female: []
        };
    }

    componentDidMount() {
        fetch("https://s3-ap-southeast-2.amazonaws.com/memberbuy-static-content/interview.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        list: [
                            {
                                label: 'Male',
                                data: result.filter(item => item.gender === 'Male')
                            },
                            {
                                label: 'Female',
                                data: result.filter(item => item.gender === 'Female')
                            }
                        ]
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const {error, isLoaded, list} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div className={'app-container'}><img src={Spinner}/></div>
        } else {
            return (
                <div className={'app-container'}>
                    {this.state.list.map(item => <ListCard key={item.label} {...item}/>)}
                </div>
            )
        }
    }
}

function handleExpandClick(props) {
    console.log(props)
}

export default List