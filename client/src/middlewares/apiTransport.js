import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getAllTransport = () => {
	return axios.get(`${domainHost}/car/getallcar`);
};

const uploadTransport = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/car/createCar`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editTransport = (id, data) => {
	return axios({
		method: 'put',
		url: `${domainHost}/car/updateCar/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteTransport = (id) => {
	return axios({
		method: 'delete',
		url: `${domainHost}/car/deleteCar/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllTransport, uploadTransport, editTransport, deleteTransport };
