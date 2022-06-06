import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
} from 'chart.js';
import '../../styles/partner/_satistical.scss';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		title: {
			display: true,
			text: 'Bảng thống kê doanh thu',
		},
	},
};
const labels = [];
const bgcLabel = ['rgba(255, 97, 131, 0.5)', 'rgba(53, 162, 235, 0.5)'];
const randomData = [];
for (let month = 1; month <= 12; month++) {
	labels.push(`Tháng ${month}`);
	randomData.push(Math.floor(Math.random() * 1000));
}

const data = {
	labels,
	datasets: [
		{
			label: 'Tháng',
			data: randomData,
			backgroundColor: (color) => {
				const maxValue = Math.max(...randomData);
				const minValue = Math.min(...randomData);

				if (color.raw === maxValue) return 'rgba(53, 162, 235, 0.5)';
				if (color.raw === minValue) return 'rgba(255, 97, 131, 0.5)';
				return 'rgba(204, 204, 204, 0.5)';
			},
		},
	],
};

const Satistical = () => {
	const [chart, setChart] = useState(1);

	const sessionPAdmin = JSON.parse(sessionStorage.getItem('adminInfo')) || {};

	const toggleChart = (num) => {
		setChart(num);
	};

	if (!sessionPAdmin.login) return window.location.assign('/partner');
	return (
		<div className="satistical">
			<div className="satistical-summary">
				<div className="satistical-summary__item">
					<p className="satistical-summary__title">Số chuyến phát hành</p>
					<p className="satistical-summary__result satistical-summary__result--green">
						{Math.floor(Math.random() * 100)}
					</p>
				</div>
				<div className="satistical-summary__item">
					<p className="satistical-summary__title">Số đơn đặt</p>
					<p className="satistical-summary__result satistical-summary__result--blue">
						{Math.floor(Math.random() * 100)}
					</p>
				</div>
				<div className="satistical-summary__item">
					<p className="satistical-summary__title">Số khách hàng</p>
					<p className="satistical-summary__result satistical-summary__result--orange">
						{Math.floor(Math.random() * 100)}
					</p>
				</div>
			</div>
			<div className="satistical-chart">
				{chart === 1 && <Line options={options} data={data} />}
				{chart === 2 && <Bar options={options} data={data} />}
				<div className="satistical-chart__btns">
					<button
						type="button"
						onClick={() => toggleChart(2)}
						className="satistical-chart__btn"
					>
						Biểu đồ cột
					</button>
					<button
						type="button"
						onClick={() => toggleChart(1)}
						className="satistical-chart__btn"
					>
						Biểu đồ đường
					</button>
				</div>
			</div>
		</div>
	);
};

export default Satistical;
