const bookRouter = require('./booking');
const userRouter = require('./user');
const companyRouter = require('./company');
const carRouter = require('./car');
const driverRouter = require('./driver');
const typeCarRouter = require('./typeCar');
const revenueRouter = require('./revenue');

function route(app) {
	app.use('/api/trip', bookRouter);
	app.use('/api/user', userRouter);
	app.use('/api/company', companyRouter);
	app.use('/api/car', carRouter);
	app.use('/api/driver', driverRouter);
	app.use('/api/typecar', typeCarRouter);
	app.use('/api/revenue', revenueRouter);
}
module.exports = route;
