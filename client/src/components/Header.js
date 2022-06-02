import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { RiBillFill } from 'react-icons/ri';
import { ItemTop, ItemBotPartner } from './Header_Item';
import '../styles/_header.scss';

// const HeaderUser = ({ havebanner }) => {
// 	const [activeLogin, setActiveLogin] = useState(false);

// 	const openLoginForm = () => setActiveLogin(!activeLogin);
// 	const linkRegisterPage = () => window.location.assign('/user/register');

// 	return (
// 		<>
// 			<header className="header">
// 				<div className="header-top">
// 					<div className="header__content header__content--top">
// 						<ItemTop type={'logo'} homelink="/" />
// 						<div className="header-top__box">
// 							<ItemTop
// 								type={'other'}
// 								icon={RiBillFill}
// 								label={'Đơn đặt của tôi'}
// 							/>
// 							<ItemTop
// 								type={'other'}
// 								icon={FaUserCircle}
// 								label={'Đăng nhập'}
// 								onClick={() => openLoginForm()}
// 							/>
// 							<ItemTop
// 								type={'actionLink'}
// 								label={'Đăng ký'}
// 								onClick={() => linkRegisterPage()}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="header-bot"></div>
// 			</header>
// 			{havebanner && <div className="slider"></div>}
// 			{activeLogin && <LoginForm />}
// 			<Outlet />
// 		</>
// 	);
// };

const HeaderPartner = () => {
	return (
		<>
			<header className="header">
				<div className="header-top">
					<div className="header__content">
						<ItemTop type={'logo'} homelink="/partner" />
					</div>
				</div>
				<div className="header-bot">
					<div className="header__content">
						<div className="header__item">
							<Link to="/partner/trip" className="header-bot__link">
								<ItemBotPartner label="Chuyến đi" />
							</Link>
						</div>
						<div className="header__item">
							<ItemBotPartner label="Khách hàng" />
						</div>
						<div className="header__item">
							<ItemBotPartner label="Hóa đơn" />
						</div>
						<div className="header__item header__item--hasSub">
							<ItemBotPartner icon={BsFillCaretDownFill} label="Quản lý xe" />

							<ul className="header-bot__subBox">
								<li>
									<Link
										to="/partner/transport"
										className="header-bot__link header-bot__link--sub"
									>
										Xe
									</Link>
								</li>
								<li>
									<Link
										to="/partner/company"
										className="header-bot__link header-bot__link--sub"
									>
										Công ty
									</Link>
								</li>
								<li>
									<Link
										to="/partner/driver"
										className="header-bot__link header-bot__link--sub"
									>
										Tài xế
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export { HeaderPartner };
