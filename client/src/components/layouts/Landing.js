
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../../img/fraggers.png'

const Landing = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }


    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large"><img src={logo} style={{ width: '400px', margin: 'auto', display: 'inline' }} alt='Logo'></img></h1>
                    <p className="lead">
                        Create a e-sports profile/portfolio, share posts and get connected with other players.
                </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div>
                    <footer class="page-footer font-small">
                        <div class="footer-copyright text-center py-3" >© 2020 Copyright:
                    <Link to="/" >www.Fraggers.gg</Link>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}

Landing.protoTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapsStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapsStateToProps)(Landing)

