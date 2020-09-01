import React, { Component } from 'react';
import ListItems from './ListItems'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      items: {
        currentItem: "",
        id: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  handleChange(e){
    this.setState({
      items: {
        currentItem: e.target.value,
        id: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.items
    if(newItem.currentItem !== ''){
      const items = [...this.state.todos, newItem]
      this.setState({
        todos: items,
        items: {
          currentItem: '',
          id: ''
        }
      })
    }
  }

  onDismiss(id){
    const filterItems = this.state.todos.filter(item =>   item.id !== id)
    console.log(filterItems)
    this.setState({
      todos: filterItems
    })
  }

  render(){
    let getHours = new Date().getHours()
    let timeOfDay ;
    if(getHours < 12){
      timeOfDay = "Good Morning what plans do you have for the day"
    }
    else if(getHours > 12 && getHours < 17){
      timeOfDay = "Good Afternoon what plans do you have for the day"
    }else{
      timeOfDay = "Good Evening what plans do you have for the day"
    }
    return (
      <div className='container'>
         <div className='todo-app'>
        <form onSubmit={this.addItem}>
          <h2 className='header-text'>My Todo<span>.App</span></h2>
          <input type='text' placeholder="Create New Todo" value={this.state.items.currentItem} onChange={this.handleChange} />
          <button className='btn-submit' type="submit">ADD</button>
        </form>
      </div>
      <h4>{timeOfDay}</h4>
      <ListItems todos = {this.state.todos} onDismiss={this.onDismiss} handleCheck={this.handleCheck}/>

      </div>
     
    )
  }
}

export default App;
