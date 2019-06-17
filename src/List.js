import React, { Component} from 'react';
import firebase from './firebase';
import { Link, animateScroll as scroll } from "react-scroll";

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList: [],
        }
    }

    
    removeItem = (item) => {
        const dbRef = firebase.database().ref(`savedItems`);
        dbRef.child(item).remove();
    }

    scrollMore = () => {
    scroll.scrollMore(150);
    }

    render() {
        return (
            <div>
                <ul className="groceryList">
                    {this.state.userList.map((listItem) => {
                        
                        return <li key={listItem.key} tabIndex={0}>  {listItem.name} 
                                    <button
                                        className="removeItem"
                                        aria-label="click to remove item"
                                        tabIndex={0}
                                        onClick={() => this.removeItem(listItem.key)}>
                                        <span aria-hidden="true">
                                            <i class="fas fa-times"></i>
                                        </span>
                                    </button>
                                </li>
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount(){
        const dbRef = firebase.database().ref("savedItems");
        dbRef.on('value', (response) => {
            const newState = [];
            const listObject = (response.val());
            for (let property in listObject) {
                newState.push({key:property, name:listObject[property]});
            }
            this.setState({
                userList: newState,
            });
            
        });

    }
}

export default List;