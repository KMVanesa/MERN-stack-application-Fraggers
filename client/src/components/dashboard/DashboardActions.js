import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" href="edit-profile.html" className="btn btn-light">
                <i className="las la-user-circle text-primary"></i> Edit Profile</Link>
            <Link to="/add-experience" className="btn btn-light">
                <i className="lab la-black-tie text-primary"></i> Add Experience</Link>
            <Link to="/add-education" className="btn btn-light">
                <i className="las la-graduation-cap text-primary"></i> Add Education</Link>
        </div>
    )
}

export default DashboardActions
