import React, { Component} from "react";
import CardList from './CardList';
import SearchBox from "./SearchBox";
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        console.log('check');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
       

    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f1'>RobotsFriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots ={filterRobots}/>
                </div>
            );
        }
        
    }
}

export default App;