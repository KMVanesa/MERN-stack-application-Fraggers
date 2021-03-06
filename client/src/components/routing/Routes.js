import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Alert from '../layouts/Alert'
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';

import Profiles from '../profiles/Profiles'; 
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import AddAchievements from '../profile-forms/AddAchievements';
import NotFound from '../layouts/NotFound';
import Tournaments from '../tournaments/Tournaments'
import AddTournament from '../tournament-form/AddTournament'
import Tournament from '../tournament/Tournament'
import MyTournaments from '../my-tournaments/MyTournaments'

const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/profiles" component={Profiles} />
                <PrivateRoute exact path="/profile/:id" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
                <PrivateRoute exact path="/add-achievement" component={AddAchievements} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/posts/:id" component={Post} />
                <PrivateRoute exact path="/tournaments" component={Tournaments} />
                <PrivateRoute exact path="/add-tournament" component={AddTournament} />
                <PrivateRoute exact path="/tournaments/:id" component={Tournament} />
                <PrivateRoute exact path="/my_tournaments" component={MyTournaments} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
