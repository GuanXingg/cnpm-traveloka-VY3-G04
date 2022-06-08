import axios from 'axios';

const getBill = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/revenue/infoBill`);
};

const getCustomer = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/revenue/customer`);
};

//TRASH API!!!!!!!!!!!!!!!!!!!
const getAllBill = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/revenue/detailCusBook`);
};

const getMonthRevenues = () => {
	return axios.get(`${process.env.REACT_APP_HOST_LOCAL}/revenue/chart`);
};

export { getBill, getCustomer, getAllBill, getMonthRevenues };
