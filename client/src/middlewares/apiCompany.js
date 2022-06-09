import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getAllCompanies = () => {
	return axios.get(`${domainHost}/company/getallCompany`);
};

const uploadCompany = (data) => {
	return axios({
		method: 'post',
		url: `${domainHost}/company/createCompany`,
		headers: { 'content-Type': 'application/json' },
		data: data,
	});
};

const editCompany = (id, data) => {
	return axios({
		method: 'put',
		url: `${domainHost}/company/updateCompany/${id}`,
		headers: { 'content-Type': 'application/json' },
		data,
	});
};

const deleteCompany = (id) => {
	return axios({
		method: 'delete',
		url: `${domainHost}/company/deleteCompany/${id}`,
		headers: { 'content-Type': 'application/json' },
	});
};

export { getAllCompanies, uploadCompany, editCompany, deleteCompany };
