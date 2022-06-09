const express = require('express');
const middlewareController = require('../app/Controller/MiddlewareConttroler');
const router = express.Router();
const usersController = require('../app/Controller/UsersController');

// refresh token
router.post('/refresh', usersController.refresh);

// đăng nhập tài khoản
router.post('/dangnhap', usersController.login);
// đăng ký tài khoản customer
router.post('/dangky', usersController.create);

// đăng xuất tài khoản
router.post(
	'/dangxuat',
	middlewareController.verifyToken,
	usersController.logout
);

// tìm kiếm chuyến đi

router.get('/getAllBooking', usersController.getAllBooking);

// nguời dùng đặt vé (thông tin khách đi)
router.post(
	'/bookingOrder/:id',
	middlewareController.verifyToken,
	usersController.bookingOrder
);

// lưu thông tin khách đi khi thanh toán
router.post(
	'/bookingOrder2/:idKhach/:idChuyen',
	middlewareController.verifyToken,
	usersController.bookingOrder2
);
// lịch sử đặt vé
router.get(
	'/history',
	middlewareController.verifyToken,
	usersController.history
);

module.exports = router;
