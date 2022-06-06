import axios from 'axios';

const getAllTransport = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/car/getallcar`);
};

const uploadTransport = (data) => {
	return axios({
		method: 'post',
		url: `${process.env.REACT_APP_HOST_LOCAL}/car/createCar`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editTransport = (id, data) => {
	return axios({
		method: 'put',
		url: `${process.env.REACT_APP_HOST_LOCAL}/car/updateCar/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteTransport = (id) => {
	return axios({
		method: 'delete',
		url: `${process.env.REACT_APP_HOST_LOCAL}/car/deleteCar/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllTransport, uploadTransport, editTransport, deleteTransport };
