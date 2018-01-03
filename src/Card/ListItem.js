import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li className={this.props.toggleOn === true? 'item-container':'item-container hide'}>
                {this.props.name}
                <i className={'fa fa-minus-circle left-align hover'} onClick={this.onDelete}/>
            </li>
        )
    }

    onDelete = (ev)=> {
        ev.stopPropagation();
        this.props.deleteItem(this.props.index);
    }
}
export default ListItem