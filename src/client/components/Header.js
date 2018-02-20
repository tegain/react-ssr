import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const authButton = props.auth ? (
		<a href="/api/logout">Logout</a>
	) : (
		<a href="/api/auth/google">Login</a>
	);

	console.log('Auth:', props.auth);

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo left">React SSR</Link>

				<ul className="right">
					<li><Link to="/users">Users</Link></li>
					<li><Link to="/admins">Admins</Link></li>
					<li>{authButton}</li>
				</ul>
			</div>
		</nav>
	)
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Header);


