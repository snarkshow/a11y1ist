import React, { Component} from 'react';
import firebase from './firebase';


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
    render() {
        return (
            <div>

                <ul className="groceryList">
                    {this.state.userList.map((listItem) => {
                        return <li key={listItem.key}>  {listItem.name} <a className="removeItem" onClick={() => this.removeItem(listItem.key)}>❌</a></li>
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