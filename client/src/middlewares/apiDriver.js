import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getAllDrivers = () => {
	return axios.get(`${domainHost}/driver/getalldriver`);
};

const uploadDriver = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/driver/createdriver`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editDriver = (id, data) => {
	return axios({
		method: 'put',
		url: `${domainHost}/driver/updatedriver/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteDriver = (id) => {
	return axios({
		method: 'delete',
		url: `${domainHost}/driver/deletedriver/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllDrivers, uploadDriver, editDriver, deleteDriver };
