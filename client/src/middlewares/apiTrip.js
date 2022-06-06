import axios from 'axios';

const getAllTrips = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/trip/getAllTrip`);
};

const uploadTrip = (data) => {
	return axios({
		method: 'post',
		url: `${process.env.REACT_APP_HOST_LOCAL}/trip/createTrip`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const edtiTrip = (id, data) => {
	return axios({
		method: 'put',
		url: `${process.env.REACT_APP_HOST_LOCAL}/trip/updateTrip/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteTrip = (id) => {
	return axios({
		method: 'delete',
		url: `${process.env.REACT_APP_HOST_LOCAL}/trip/deleteTrip/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllTrips, uploadTrip, edtiTrip, deleteTrip };
