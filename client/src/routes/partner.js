import { Routes, Route } from 'react-router-dom';
import { HeaderPartner } from '../components/Header';

const PartnerRoute = () => {
	return (
		<Routes>
			<Route path="" element={<HeaderPartner />}>
			</Route>
		</Routes>
	);
};

export default PartnerRoute;
