import React, { Component} from 'react';
import firebase from './firebase';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList: [],
        }
    }
    
    removeItem = (bookID) => {
        const dbRef = firebase.database().ref("savedItems");
        dbRef.child(bookId).remove();
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.userList.map((listItem) => {
                        return <li key={'itemKey'}>{listItem.name} 
                        <button onClick={() => this.removeItem(listItem.name)}>Remove item</button></li>
                        
                    })}
                    
                </ul>
            </div>
        );
    }
    componentDidMount(){
        const dbRef = firebase.database().ref("savedItems");
        dbRef.on('value', (response) => {
            const newState = [];
            const listArray = (response.val());
            for (let key in listArray) {
                newState.push({key:key, name:listArray[key]});
            }
            this.setState({
                userList: newState,
            });
            
        });
    }
}

export default List;
    