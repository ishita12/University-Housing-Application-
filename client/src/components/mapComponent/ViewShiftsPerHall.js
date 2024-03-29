import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/proctorActions';
import Moment from 'react-moment';
import SelectListGroup from '../commons/SelectListGroup';



class ViewShiftsPerHall extends Component {

constructor(props) {
  super(props);

  this.state = {
    errors: '',
    redirect: false,
    shift: '',
    idArray: [],
    shiftArray: [],
    droppedIdArray: [],
    test: false,
    redirectVal: false,
    show: false,
    val1: false,
    val2: false,
    val3: false,
    val4: false
  }

  const hallIs=this.props.location.state.referrerHall;
  console.log('hall is   '+hallIs);

  this.props.getDroppedShiftIdsByLoggedInUser(this.props.auth.user.id);

  console.log('inside update state method   '+this.props.auth.user.id);
  setTimeout(function() {this.props.getClaimedShiftIds(); }.bind(this), 3000);


  setTimeout(function() {this.testing(); }.bind(this), 2000);


  setTimeout(function() {this.getShiftForHall(hallIs); }.bind(this), 2000);


}



getShiftForHall(hallIs) {

console.log('the hall is   '+hallIs);





}

componentWillMount() {

console.log('4');
  this.props.getClaimedShiftIds();


  setTimeout(function() {this.props.getDroppedShiftIdsByLoggedInUser(this.props.auth.user.id); }.bind(this), 1000);

/*
  const claimedIds = this.props.viewPostedShifts.claimedIds;
  const droppedIds = this.props.viewPostedShifts.droppedIds;
  const result = this.props.viewPostedShifts.droppedIds.success;
  console.log('success value   '+result);
  for(var i in Object.values(claimedIds)) {
    this.setState({test: true});
    console.log('in for loop  for claimed ids  ');
    if (claimedIds.hasOwnProperty(i)) {

       this.state.idArray.push(Object.values(claimedIds[i]));
        console.log('test' + " -> " + this.state.idArray[i]);
   }

  }

  for(var i in Object.values(droppedIds)) {
    this.setState({test: true});
    console.log('in for loop for dropped ids   ');
    if (droppedIds.hasOwnProperty(i)) {

       this.state.droppedIdArray.push(Object.values(droppedIds[i]));
        console.log('test1' + " -> " + this.state.droppedIdArray[i]);
   }

  }
*/
setTimeout(function() {this.testing(); }.bind(this), 2000);

}


testing(){
  console.log('2');
  const claimedIds = this.props.viewPostedShifts.claimedIds;

  console.log('dropped id --------------->         '+this.props.auth.user.id);

  let arr1 = [];
  for(var i in Object.values(claimedIds)) {
    this.setState({test: true});
    console.log('in for loop  for claimed ids  ');
    if (claimedIds.hasOwnProperty(i)) {

       arr1.push(Object.values(claimedIds[i]));
      //  console.log('test' + " -> " + Object.values(this.arr1[i]));
   }

  }
  console.log('claim !!!!!!!!!!!!    '+arr1);
 this.setState({idArray: arr1});
 setTimeout(function() {this.testing2(); }.bind(this), 2000);

}

testing2(){
  console.log('2');

  const droppedIds = this.props.viewPostedShifts.droppedIds;


  let arr2 = [];
  for(var i in Object.values(droppedIds)) {
    this.setState({test: true});
    console.log('in for loop for dropped ids   ');
    if (droppedIds.hasOwnProperty(i)) {

       arr2.push(Object.values(droppedIds[i]));
  //      console.log('test1' + " -> " + this.arr2[i]);
   }

  }

  console.log('drop !!!!!!!!!!!!    '+arr2);
 this.setState({droppedIdArray: arr2});


/*

  */
}



updateState(ids, dropids) {
console.log('inside update state method real  ');
 this.setState({test: true});
console.log('1');
setTimeout(function() {this.set(ids); }.bind(this), 1000);


}


set(ids){
  console.log('ishita !!!!!!!!!   '+this.state.test);
  if(this.state.test) {
      this.props.getAllShifts1(ids);
      setTimeout(function() {this.getShiftsByHall(); }.bind(this), 2000);
  }
  if(!this.state.test) {

    this.props.allShifts1();
     setTimeout(function() {this.getShiftsByHall(); }.bind(this), 2000);

  }
}



getShiftsByHall(shifts) {
  console.log('inside getShiftForHall method !!!!!!!!!!!!!!!');
  const {shifts1} = this.props.shiftsView;
  const hallIs=this.props.location.state.referrerHall;


    for(var i in Object.values(shifts1)) {


      if (shifts1.hasOwnProperty(i)) {

         this.state.shiftArray.push(Object.values(shifts1[i]));
          console.log('shiftArray' + " -> " + this.state.shiftArray[i]);
     }

    }



  setTimeout(function() {this.props.getMyShifts(this.state.shiftArray, hallIs); }.bind(this), 2000);


}


componentDidMount() {
  console.log('3');
  const  user  = this.props.auth.user;
  console.log('the proctor is   '+user.name);

this.props.getClaimedShiftIds();


setTimeout(function() {this.props.getDroppedShiftIdsByLoggedInUser(this.props.auth.user.id); }.bind(this), 2000);




setTimeout(function() {this.getIds(); }.bind(this), 1000);



}


updateState2(ids) {
console.log('inside update state method   2');
 this.setState({test: true});

setTimeout(function() {this.set(ids); }.bind(this), 1000);


}


getIds() {
  console.log('inside getids method  ');
  const claimedIds = this.props.viewPostedShifts.claimedIds;
  const droppedIds = this.props.viewPostedShifts.droppedIds;


  for(var i in Object.values(claimedIds)) {
    this.setState({test: true});

    if (claimedIds.hasOwnProperty(i)) {

       this.state.idArray.push(Object.values(claimedIds[i]));
        console.log('test' + " -> " + this.state.idArray[i]);
   }

  }


  for(var i in Object.values(droppedIds)) {

    if (droppedIds.hasOwnProperty(i)) {

       this.state.droppedIdArray.push(Object.values(droppedIds[i]));
        console.log('test for dropped id ' + " -> " + this.state.droppedIdArray[i]);
   }

  }



  const ids=Object.values(this.state.idArray);
  const dropids = Object.values(this.state.droppedIdArray);
  let verify = false;
  for(var i in this.state.droppedIdArray) {
    verify=true;
    console.log('^^^^^^^^^^^^   drop '+ this.state.droppedIdArray[i]);
  }
for(var i in this.state.idArray) {
  console.log('***************    '+i);

   if(verify) {

     this.updateState(ids, dropids);

   }
  if(!verify) {
    this.updateState2(ids);
  }



}

  console.log('in did mount method value of test is  '+this.state.test);

  if(!this.state.test) {
    this.noClaimedShifts();
  }
  console.log('!!!!!!!!!!!!!!     ' + '        '+ids);
  if(!ids){
    console.log('no claimed shifts    yayyyy');
  }

}

noClaimedShifts() {
  this.props.allShifts1();
}
componentWillReceiveProps(nextProps) {
  if(nextProps.errors) {
    this.setState({errors: nextProps.errors});
  }
  if(this.state.errors) {
  console.log('there are errors   '+this.state.errors.err1);
  }
  else {
    console.log('no errors');
  }
}

  claimShift(shift) {
    const  userID  = this.props.auth.user;
  console.log('claim shift  with id  '+'    '+shift._id+'    '+shift.hall+'      '+userID.id);
this.setState({redirect: true, shift: shift});

   //this.props.claimUserShift(shift, userID.id, this.props.history);



}

reclaimShift(shift) {
  const userID = this.props.auth.user;
  console.log('Inside reclaim method    '+shift._id+'        '+shift.hall+'        '+userID.id);
  this.setState({redirectVal: true, shift: shift});
}



  render () {


const hallIs=this.props.location.state.referrerHall;








 const { myShifts1 } = this.props.shiftsView;
const {redirect} = this.state;
console.log('value of redirect is   '+redirect);
const {redirectVal} = this.state;
const {shift} = this.state;
const  user  = this.props.auth.user;
if(redirect) {
   return (

    <Redirect to={{
                  pathname: '/individualShiftClaim',
                  state: { referrerShift: shift, referrerUser: user.id }
              }} />

  )

}

if(redirectVal) {
  return (

    <Redirect to={{
                  pathname: '/individualShiftReClaim',
                  state: { referrerShift: shift, referrerUser: user.id }
              }} />


  )
}



  const { errors } = this.state;
  console.log('line 42   '+typeof shifts);

    if(this.props.shiftsView.shifts === undefined || this.props.shiftsView.shifts) {
      console.log('null');
    } else {
      console.log('not null');
    }



    const dropids = Object.values(this.state.droppedIdArray);

const aa = Object.entries(this.state.droppedIdArray);
console.log('ffff    '+ this.state.droppedIdArray+ '         '+typeof this.state.droppedIdArray);

console.log('lets seee   ');
for(var i in aa){
 console.log('$$$$      '+Object.values(Object.values(this.state.droppedIdArray[i])).indexOf('5b0ac7ef091f5c372047c34d'));
}

  let shiftsPosted = null;
 shiftsPosted = Object.values(myShifts1).map(shift => (

  <tr key={shift._id}>
  <td> <Moment format="YYYY/MM/DD">{shift.shiftDate}</Moment></td>
  <td>{shift.hall}</td>
  <td>{shift.shiftType}</td>
  <td>{shift.timeIn}</td>
  <td>{shift.timeOut}</td>
  <td>{shift.hours}</td>
   {  JSON.stringify(this.state.droppedIdArray).indexOf(shift._id) > -1 ? (<td><button onClick={this.reclaimShift.bind(this, shift)} className="btn btn-warning">Reclaim   </button></td>) : (<td><button onClick={this.claimShift.bind(this, shift)} className="btn btn-info">Claim Shift</button></td>)}

  </tr>

  ));









  return (





<div>
<h1>Shifts for {hallIs}</h1>
<table className="table">

<thead>
<tr>
<th>Date</th>
<th>Hall</th>
<th>Type</th>
<th>Time In</th>
<th>Time Out</th>
<th>Hours</th>
</tr>
{shiftsPosted}

</thead>
</table>







<Link to="/dashboard" className="btn btn-warning  mt-4">
Back
</Link>
</div>

  );



























  }
}













const mapStateToProps = (state) => {
  return {
  shiftsView: state.viewPostedShifts,
  errors: state.errReducer,
    auth: state.auth,
    viewPostedShifts: state.viewPostedShifts
  }
}




const mapDispatchToProps = dispatch => {

  return {
    getAllShifts: (ids) => dispatch(actions.getAllShifts(ids)),
    getAllShifts1: (ids) => dispatch(actions.getAllShifts1(ids)),
    claimUserShift: (shift, userID, history) => dispatch(actions.claimUserShift(shift, userID, history)),
    getClaimedShiftIds: () => dispatch(actions.getClaimedShiftIds()),
    allShifts: () => dispatch(actions.allShifts()),
    getDroppedShiftIdsByLoggedInUser: (uid) => dispatch(actions.getDroppedShiftIdsByLoggedInUser(uid)),
    getVal2: (hall, type, shifts) => dispatch(actions.getVal2(hall, type, shifts)),
    getMyShifts: (shifts1, hallIs) => dispatch(actions.getMyShifts(shifts1, hallIs))
    }

}





export default connect(mapStateToProps, mapDispatchToProps)(ViewShiftsPerHall);
