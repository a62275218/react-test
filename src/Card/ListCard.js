import React from 'react';
import ListItem from '../Card/ListItem';

class ListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            data: this.props.data
        }
    }
    render() {
        return (
            <ul className={'card-container'}>
                <h2><i className={this.state.isToggleOn?'fa fa-minus hover':'fa fa-plus hover'} onClick={this.handleClick}/> {this.props.label}</h2>
                    {
                        this.props.data.map((item,index) =>
                            <ListItem key={item.name}
                                      index={index}
                                      {...item}
                                      toggleOn={this.state.isToggleOn}
                                      deleteItem={this.handleRemove}/>)
                    }
            </ul>
        )
    }

    handleClick = () => {
        this.setState(prevState => (
            {isToggleOn: !prevState.isToggleOn}
        ));
    };

    handleRemove = (index)=>{
        console.log(index)
        const items = this.props.data;
        this.setState({
            data:items.splice(index,1)
        });
    }
}
export default ListCard