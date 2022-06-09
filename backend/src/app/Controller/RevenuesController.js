const { conn } = require('../../config/db/sql');

class RevenuesController {
	async test(req, res) {
		res.render('revenue');
	}
	async chart(req, res, next) {
		try {
			const pool = await conn;
			const sqlString = `SELECT ma_hoa_don , ngay_dat_ve , SUM(tong_tien) AS billPrice FROM hoa_don GROUP BY ma_hoa_don,ngay_dat_ve`;
			return await pool.request().query(sqlString, async function (err, data) {
				if (data) {
					var totalBillPrice = 0;
					let listBillAndPrice = data.recordset;
					let analyticRevenueByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					const currentYear = new Date().getFullYear();
					listBillAndPrice.forEach((item) => {
						const yearOfBill = new Date(item.ngay_dat_ve).getFullYear();
						const monthOfBill = new Date(item.ngay_dat_ve).getMonth();

						if (yearOfBill === currentYear) {
							analyticRevenueByMonth[monthOfBill] += item.billPrice;
						}
					});
					for (let i = 0; i < data.recordset.length; i++) {
						totalBillPrice += data.recordset[i].billPrice;
					}
					// tổng số khách đặt
					const sqlString2 = `SELECT COUNT(*) as totalUser FROM khach_dat`;
					return await pool
						.request()
						.query(sqlString2, async function (err2, data2) {
							if (err2) {
								res.json({ msg: 'không có dữ liệu khách đặt' });
								console.log(err2);
							} else {
								const sqlString3 = `SELECT COUNT(*) as totalTrip FROM chuyen_di`;
								return await pool
									.request()
									.query(sqlString3, async function (err3, data3) {
										if (err3) {
											res.json({ msg: 'không có dữ liệu chuyến đi' });
											console.log(err2);
										} else {
											const sqlString4 = `SELECT COUNT(*) as totalBill FROM hoa_don`;
											return await pool
												.request()
												.query(sqlString4, async function (err4, data4) {
													if (err4) {
														res.json({ msg: 'không có dữ liệu hóa đơn' });
														console.log(err2);
													} else {
														res.json({
															result: {
																'Tháng 01': analyticRevenueByMonth[0],
																'Tháng 02': analyticRevenueByMonth[1],
																'Tháng 03': analyticRevenueByMonth[2],
																'Tháng 04': analyticRevenueByMonth[3],
																'Tháng 05': analyticRevenueByMonth[4],
																'Tháng 06': analyticRevenueByMonth[5],
																'Tháng 07': analyticRevenueByMonth[6],
																'Tháng 08': analyticRevenueByMonth[7],
																'Tháng 09': analyticRevenueByMonth[8],
																'Tháng 10': analyticRevenueByMonth[9],
																'Tháng 11': analyticRevenueByMonth[10],
																'Tháng 12': analyticRevenueByMonth[11],
															},
															totalAllBill: totalBillPrice,
															totalUser: data2.recordset[0].totalUser,
															totalTrip: data3.recordset[0].totalTrip,
															totalBill: data4.recordset[0].totalBill,
														});
													}
												});
										}
									});
							}
						});
				} else {
					res.json({ msg: 'không có dữ liệu hóa đơn' });
				}
			});
		} catch (err) {
			console.log(err);
		}
	}
	async detailCusBook(req, res, next) {
		const pool = await conn;
		const sqlString = `select k.email ,  h.ma_hoa_don , h.ngay_dat_ve , h.so_luong , h.tong_tien , h.trang_thai_dat , d.ten_khach_di , d.dienthoaiKH , d.diaChiKH ,d.CMND,d.ngaysinh,d.gioitinh,k.tenKH , k.diaChiKH , k.CMND,k.gioitinh,c.noi_di,c.noi_den,c.ngay_bat_dau,c.gio_bat_dau  
    from khach_dat k , khach_di d , hoa_don h , chuyen_di c 
    where k.email=h.email and d.ma_khach_di=h.ma_khach_di and h.ma_chuyen_di = c.ma_chuyen_di 
    `;
		return await pool.request().query(sqlString, async function (err, data) {
			if (err) {
				res.json({ msg: 'không có dữ liệu' });
				console.log(err);
			} else {
				res.json({ result: data.recordset, msg: 'Ráng mà đổ !!!!!!!!!!!' });
			}
		});
	}
	async customer(req, res, next) {
		const pool = await conn;
		const sqlString = `select * 
    from khach_dat  
    `;
		return await pool.request().query(sqlString, async function (err, data) {
			if (err) {
				res.json({ msg: 'không có dữ liệu' });
				console.log(err);
			} else {
				res.json({ result: data.recordset, msg: 'Ráng mà đổ !!!!!!!!!!!' });
			}
		});
	}
}
module.exports = new RevenuesController();
