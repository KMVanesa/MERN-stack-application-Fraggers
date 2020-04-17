import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addParticipants } from '../../actions/tournament';


const TournamentItem = ({
    tournament: { _id, name, user, participants, entry_fees, game, pricepool, date }, showActions, auth
}) => (
        user === auth.user._id ? <Fragment>
            <div className='tour bg-white p-1 my-1'>
                <div>
                    <ul>
                        <li>Name:{name}</li>
                        <li>Game:{game}</li>
                        <li>Prize Pool:{pricepool}</li>
                        <li>Entry Fees:{entry_fees}</li>
                    </ul>
                    <p className='post-date'>
                        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                    </p>
                    {showActions && (
                        <Fragment>
                            <Link to={`/tournaments/${_id}`} className='btn btn-primary'>Read More...
                        </Link>
                        </Fragment>
                    )}
                </div>
            </div>
        </Fragment> : <Fragment>
                You have not owned Tournaments Found
        </Fragment>
    );

TournamentItem.defaultProps = {
    showActions: true
};

TournamentItem.propTypes = {
    auth: PropTypes.object.isRequired,
    addParticipants: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { addParticipants }
)(TournamentItem);