import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import { Link } from 'react-router-dom'
import DashboardActions from './DashboardActions'
import Experience from './Experience'

import Achievements from './Achievements'


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, deleteAccount }) => {

    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile]);

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead"><i className="las la-user la-lg"></i>Welcome {user && user.name}</p>
        {profile !== null ? <Fragment><DashboardActions /><Experience experience={profile.experience} /><Achievements achievement={profile.achievements} /><div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}><i className="las la-user-slash" ></i>{'     '}Permanently Delete the Account</button>
        </div>
        </Fragment> : <Fragment>
                <p>You don't have profile, Click Here to create a one</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
            </Fragment>}
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
