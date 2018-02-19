import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentDidMount () {
		this.props.fetchUsers();
	}

	renderUsers () {
		return this.props.users.map((user) => {
			return <li key={user.id}>{user.name}</li>
		});
	}

	render () {
		return (
			<div>
				Here's a big list of users:
				<ul>
					{this.renderUsers()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users
});

// Other way to use mapDispatchToProps
// const mapDispatchToProps = (dispatch) => ({
// 	fetchUsers: () => dispatch(fetchUsers())
// });


export const loadData = (store) => {
	// Return a promise
	return store.dispatch(fetchUsers());
};

/**
 * Pass an object as mapDispatchToProps
 * `If an object is passed, each function inside it is assumed to be a Redux action creator.`
 *
 * @doc https://github.com/reactjs/react-redux/blob/master/docs/api.md
 */
export default {
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
