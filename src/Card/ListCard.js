import React from 'react';
import ListItem from '../Card/ListItem';

class ListCard extends React.Component {
    render() {
        return (
            <ul className={'card-container'}>
                <h2><i className={'fa fa-plus hover'}/> {this.props.label}</h2>
                    {this.props.data.map(item => <ListItem key={item.name} {...item}/>)}
            </ul>
        )
    }

    /*handleClick = (event) => {
        event.preventDefault();
        console.log('123')
    }*/
}
export default ListCard