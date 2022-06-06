import { LoadingIcon, EmptyData } from '../../components/Status';

const initialApiData = {
	loading: true,
	data: [],
};
const arrTableHead = [
	'Mã chuyến đi',
	'Mã xe',
	'Nơi đi',
	'Nơi trung gian',
	'Nơi đến',
	'Ngày bắt đầu',
	'Ngày kết thúc',
	'Giờ bắt đầu',
	'Giờ kết thúc',
	'Hành lý',
	'Đơn giá',
];

const ManageBill = () => {
	return (
		<div className="manage">
			<table className="manage__table">
				<thead className="manage__head">
					<tr>
						<th>STT</th>
						{arrTableHead.map((head, index) => (
							<th key={index}>{head}</th>
						))}
						<th colSpan="2">Chức năng</th>
					</tr>
				</thead>
				<tbody className="manage__body">
					<tr>
						<td>
							<EmptyData admin />
						</td>
					</tr>
					{/* apiDataTrip.data.map((trip, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className="manage__col--11">{trip.ma_chuyen_di}</td>
								<td className="manage__col--11">{trip.ma_xe}</td>
								<td className="manage__col--11">{trip.noi_di}</td>
								<td className="manage__col--11">{trip.noi_trung_gian}</td>
								<td className="manage__col--11">{trip.noi_den}</td>
								<td className="manage__col--11">
									{moment(trip.ngay_bat_dau).format('DD/MM/yyyy')}
								</td>
								<td className="manage__col--11">
									{moment(trip.ngay_ket_thuc).format('DD/MM/yyyy')}
								</td>
								<td className="manage__col--11">
									{trip.gio_bat_dau.slice(0, 5)}
								</td>
								<td className="manage__col--11">
									{trip.gio_ket_thuc.slice(0, 5)}
								</td>
								<td className="manage__col--11">{trip.hanh_ly}</td>
								<td className="manage__col--11">
									{trip.don_gia.toLocaleString()}
								</td>
								<td>
									<button
										className="manage__btn"
										onClick={() => toggleEdit(trip)}
									>
										<MdModeEditOutline className="manage__btn--edit" />
									</button>
								</td>
								<td>
									<button
										className="manage__btn"
										onClick={() => deleteOneTrip(trip.ma_chuyen_di)}
									>
										<MdDelete className="manage__btn--delete" />
									</button>
								</td>
							</tr>
						))
					)} */}
				</tbody>
			</table>
		</div>
	);
};

export default ManageBill;
