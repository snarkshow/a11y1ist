// import React, { Component } from 'react';

// class CurrentDate extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: []
//         }
//     }

//     todaysDate = () => {
//         const newState = [];
//         let day = new Date().getDate();
//         console.log(day)
//         let month = new Date().getMonth() + 1;
//         let year = new Date().getFullYear();
//         console.log(month)
//         newState.push(year, month, day)
//         console.log(newState)
//         this.setState({
//             date: newState
//         });
//     }

//     render(){
//         return(
//             <div className="ListHeading">
//                 <h2>
//                     My Grocery List
//                 </h2>
//                 <h3>{this.todaysDate()}</h3>
//                 <h3>{this.state.date}</h3>
                 

//             </div>
//         )
//     }
// }

// export default CurrentDate;

// // function MyFunction() {
// //     var tempDate = new Date();
// //     var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
// //     const currDate = "Current Date= " + date;
// //     return (
// //         <p>{currDate}</p>
// //     );