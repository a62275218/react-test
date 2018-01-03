import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li className={'item-container'}>
                {this.props.name}
                <i className={'fa fa-minus-circle left-align hover'}/>
            </li>
        )
    }
}
export default ListItem