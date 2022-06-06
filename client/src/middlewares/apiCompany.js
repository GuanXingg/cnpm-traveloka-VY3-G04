import axios from 'axios';

const getAllCompanies = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/company/getallCompany`);
};

const uploadCompany = (data) => {
	return axios({
		method: 'post',
		url: `${process.env.REACT_APP_HOST_LOCAL}/company/createCompany`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editCompany = (id, data) => {
	return axios({
		method: 'put',
		url: `${process.env.REACT_APP_HOST_LOCAL}/company/updateCompany/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteCompany = (id) => {
	return axios({
		method: 'delete',
		url: `${process.env.REACT_APP_HOST_LOCAL}/company/deleteCompany/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllCompanies, uploadCompany, editCompany, deleteCompany };
