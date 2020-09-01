import React, {Component} from 'react';
import './ListItems.css';

class ListItems extends Component {
  render () {
    const items = this.props.todos.map (item => (
      <div className="list" key={item.id}>
       {item.currentItem}
        <button className='trash-icon' onClick={() => this.props.onDismiss(item.id)}>
          <i className="fa fa-trash" />
        </button>
      </div>
    ));
    return (
      <div className="items">
        {items}

      </div>
    );
  }
}

export default ListItems;
