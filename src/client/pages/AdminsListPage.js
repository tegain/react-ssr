import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import RequireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
	componentDidMount () {
		this.props.fetchAdmins();
	}

	renderAdmins () {
		return this.props.admins.map((admin) => <li key={admin.id}>{admin.name}</li>);
	}

	render () {
		return (
			<div>
				<h3>Protected list of admins</h3>
				<ul>
					{this.renderAdmins()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	admins: state.admins
});

export default {
	component: connect(mapStateToProps, { fetchAdmins })(RequireAuth(AdminsListPage)), // Wrap AdminsListPage with RequireAuth HOC
	loadData: (store) => store.dispatch(fetchAdmins())
};