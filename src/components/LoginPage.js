import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">React App</h1>
      <p>
        tagline
      </p>
      <button className="button" onClick={startLogin}>Log-In with Google</button>
    </div>

  </div>
)


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
