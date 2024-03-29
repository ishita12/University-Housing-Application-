import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
import * as pactions from '../../actions/profileActions';
class Navbar extends Component {

onLogoutClick = (event) => {
  event.preventDefault();
  this.props.clearCurrentProfile();
  this.props.logout();
}

  render () {

  const { isAuthenticated, user } = this.props.auth;

 const authLinks = (

   <ul className="navbar-nav ml-auto">
     <li className="nav-item">
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
     </li>
     <li className="nav-item">
    <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
    <img className="rounded-circle" src={user.avatar} alt={user.name} style={{width: '25px', marginRight: '5px'}} title="To have a avatar you need gravatar connected to your email" />
  Logout
   </a>
   </li>
   </ul>

 );
const guestLinks = (

  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
     <Link className="nav-link" to="/register">Sign up</Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/login">Login</Link>
    </li>
  </ul>


);

   return (
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
       <div className="container">
         <Link className="navbar-brand" to="/">RSO</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
           <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="mobile-nav">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item">
               <Link className="nav-link" to="/profiles"> Proctors
               </Link>
             </li>
           </ul>

          {isAuthenticated ? authLinks : guestLinks}
         </div>
       </div>
     </nav>

   );
  }
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {

  return {
  auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {

return {
logout:  () => dispatch(actions.logout()),
clearCurrentProfile: () => dispatch(pactions.clearCurrentProfile())
}

}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
