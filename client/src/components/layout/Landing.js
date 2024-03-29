import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {


  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  

  render () {
    return (

      <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Residential Proctor Service
                  </h1>
                  <p className="lead"> Be a proctor and a part of one of the most popular on-Campu jobs</p>
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                  <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>



    );

  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
  auth: state.auth
  }
}

export default connect(mapStateToProps)(Landing);
