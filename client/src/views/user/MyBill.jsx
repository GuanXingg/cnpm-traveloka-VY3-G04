import { useState, useEffect } from 'react';
import { RiBillLine, RiCheckboxCircleFill } from 'react-icons/ri';
import { GiCityCar } from 'react-icons/gi';
import NoBillIcon from '../../assets/icons/cancel.png';
import '../../styles/user/_bill.scss';

const sessionPBill = JSON.parse(sessionStorage.getItem('bill')) || {};

const { ma_hoa_don, noi_di, tong_tien, trang_thai_dat } = sessionPBill;

const OwnBill = () => {
	const [nav, setNav] = useState(1);

	return (
		<div className="bill">
			<div className="bill-sidebar">
				<div
					className={`bill-sidebar__item ${
						nav === 1 ? 'bill-sidebar__item--active' : ''
					}`}
					onClick={() => setNav(1)}
				>
					<RiBillLine />
					<span className="bill-sidebar__txt">Giao dịch tiến hành</span>
				</div>
				<div
					className={`bill-sidebar__item ${
						nav === 2 ? 'bill-sidebar__item--active' : ''
					}`}
					onClick={() => setNav(2)}
				>
					<RiCheckboxCircleFill />
					<span className="bill-sidebar__txt">Giao dịch thành công</span>
				</div>
			</div>
			<div className="bill-content">
				{nav === 1 && <NoBill />}
				{nav === 2 && <HaveBill />}
			</div>
		</div>
	);
};

const HaveBill = () => {
	const [openBill, setOpenBill] = useState(false);
  
	const toggleOpenBill = () => setOpenBill(!openBill);

	return (
		<>
			<div className="bill-content__item bill-content__item--yes">
				<div className="bill-content__summary">
					<div className="bill-content__code">
						Mã đặt chỗ
						<h3 className="bill-content__numberCode">{ma_hoa_don}</h3>
					</div>
					<h3 className="bill-content__price">VND</h3>
				</div>
				<div className="bill-content__trip">
					<GiCityCar />
					<span className="bill-content__fromDes">Từ {noi_di}</span>
				</div>
				<div className="bill-content__direct">
					<span className="bill-content__wait bill-content__wait--success">
						Thanh toán thành công
					</span>
					<div className="bill-content__link" onClick={() => toggleOpenBill()}>
						Xem tất cả
					</div>
				</div>
			</div>
			{openBill && <ModelBill setOpenBill={toggleOpenBill} />}
		</>
	);
	// else
	// 	return (
	// 		<div className="bill-content__item bill-content__item--no">
	// 			<div className="bill-content__image">
	// 				<img src={NoBillIcon} alt="No bill" className="bill-content__img" />
	// 			</div>
	// 			<div className="bill-content__announce">
	// 				<h4 className="bill-content__title">
	// 					Không có giao dịch đang tiến hành
	// 				</h4>
	// 				<p className="bill-content__txt">
	// 					Bạn không có giao dịch đang tiến hành nào từ phiên giao dịch trước.
	// 					Những giao dịch chưa hoàn thành sẽ được lưu tại đây.
	// 				</p>
	// 			</div>
	// 		</div>
	// 	);
};

const NoBill = () => {
	return (
		<div className="bill-content__item bill-content__item--yes">
			<div className="bill-content__summary">
				<div className="bill-content__code">
					Mã đặt chỗ <h3 className="bill-content__numberCode">{ma_hoa_don}</h3>
				</div>
				<h3 className="bill-content__price">
					{tong_tien.toLocaleString()} VND
				</h3>
			</div>
			<div className="bill-content__trip">
				<GiCityCar />
				<span className="bill-content__fromDes">Từ {noi_di}</span>
			</div>
			<div className="bill-content__direct">
				<span className="bill-content__wait">
					Đang đợi chọn phương thức thanh toán
				</span>
				<a
					href="/stage/payment"
					className="bill-content__link"
					onClick={() => sessionStorage.removeItem('billStatus')}
				>
					Tiếp tục
				</a>
			</div>
		</div>
	);
	// else
	// 	return (
	// 		<div className="bill-content__item bill-content__item--no">
	// 			<div className="bill-content__image">
	// 				<img src={NoBillIcon} alt="No bill" className="bill-content__img" />
	// 			</div>
	// 			<div className="bill-content__announce">
	// 				<h4 className="bill-content__title">
	// 					Không có giao dịch đang tiến hành
	// 				</h4>
	// 				<p className="bill-content__txt">
	// 					Bạn không có giao dịch đang tiến hành nào từ phiên giao dịch trước.
	// 					Những giao dịch chưa hoàn thành sẽ được lưu tại đây.
	// 				</p>
	// 			</div>
	// 		</div>
	// 	);
};

const ModelBill = ({ setOpenBill }) => {
	return (
		<div className="model" onClick={() => setOpenBill()}>
			<div className="model__box" onClick={(e) => e.stopPropagation()}>
				<div className="model__content">
					<div className="model__logo">
						<img
							src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
							alt="logo"
							className="model__img"
						/>
					</div>
					<h2 className="model__title">Hoá đơn thanh toán</h2>
					<div className="model__info">
						<div className="model__group">
							<p className="model__field">
								Mã hóa đơn:<span className="model__value">012345</span>
							</p>
							<p className="model__field">
								Ngày lập hóa đơn:<span className="model__value">1/1/2001</span>
							</p>
						</div>
						<p className="model__field">
							Tên khách hàng:<span className="model__value">Huwng</span>
						</p>
						<p className="model__field">
							Điện thoại:<span className="model__value">01235568</span>
						</p>
						<p className="model__field">
							Số lượng:<span className="model__value">2</span>
						</p>
						<p className="model__field">
							Phương thức thanh toán:
							<span className="model__value">Paypal</span>
						</p>
						<p className="model__field">
							Tổng tiền:<span className="model__value">800000</span>
						</p>
					</div>
					<p className="model__tableCap">Thông tin chuyến đi:</p>
					<table className="model__table">
						<thead>
							<tr>
								<th>Điểm bắt đầu</th>
								<th>Nơi đến</th>
								<th>Ngày khởi hành</th>
								<th>Thời gian</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Hồ Chí Minh</td>
								<td>Hồ Chí Minh</td>
								<td>30/9/2000</td>
								<td>17:05</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OwnBill;
