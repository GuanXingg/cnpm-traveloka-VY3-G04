import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getAllTrips = () => {
	return axios.get(`${domainHost}/trip/getAllTrip`);
};

const uploadTrip = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/trip/createTrip`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const edtiTrip = (id, data) => {
	return axios({
		method: 'put',
		url: `${domainHost}/trip/updateTrip/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteTrip = (id) => {
	return axios({
		method: 'delete',
		url: `${domainHost}/trip/deleteTrip/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllTrips, uploadTrip, edtiTrip, deleteTrip };
