import axios from 'axios';

const domainHost =
	process.env.REACT_APP_HOST || process.env.REACT_APP_HOST_LOCAL;

const getBill = () => {
	return axios.get(`${domainHost}/revenue/infoBill`);
};

const getCustomer = () => {
	return axios.get(`${domainHost}/revenue/customer`);
};

//TRASH API!!!!!!!!!!!!!!!!!!!
const getAllBill = () => {
	return axios.get(`${domainHost}/revenue/detailCusBook`);
};

const getMonthRevenues = () => {
	return axios.get(`${domainHost}/revenue/chart`);
};

export { getBill, getCustomer, getAllBill, getMonthRevenues };
