export const FETCH_USERS = 'FETCH_USERS';

/**
 * fetchUsers action creator
 *
 * Allow to return an async function thanks to redux-thunk
 *
 * @returns {function(*)}
 */
export const fetchUsers = () => {
	/**
	 * Use the `api` function argument (from thunk middleware) to make requests,
	 * which will automatically prepend the '/api' to the url
	 * (and the Express server proxy middleware will catch it and redirect to the correct api url)
	 */
	return async (dispatch, getState, api) => {
		const res = await api.get('/users');

		dispatch({
			type: FETCH_USERS,
			payload: res
		});
	}
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchCurrentUser = () => {
	return async (dispatch, getState, api) => {
		const res = await api.get('/current_user');

		dispatch({
			type: FETCH_CURRENT_USER,
			payload: res
		})
	}
};