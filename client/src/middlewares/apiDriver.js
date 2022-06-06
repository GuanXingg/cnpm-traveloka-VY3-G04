import axios from 'axios';

const getAllDrivers = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/driver/getalldriver`);
};

const uploadDriver = (data) => {
	return axios({
		method: 'post',
		url: `${process.env.REACT_APP_HOST_LOCAL}/driver/createdriver`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editDriver = (id, data) => {
	return axios({
		method: 'put',
		url: `${process.env.REACT_APP_HOST_LOCAL}/driver/updatedriver/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteDriver = (id) => {
	return axios({
		method: 'delete',
		url: `${process.env.REACT_APP_HOST_LOCAL}/driver/deletedriver/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllDrivers, uploadDriver, editDriver, deleteDriver };
