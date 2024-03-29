import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Error from '../../_error';
import { Context } from '../../../context/Context';
import data from '../../../data/products-data';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import BasketModal from '../../../components/Modals/BasketModal';
import DeliveryModal from '../../../components/Modals/DeliveryModal';
import ReturnModal from '../../../components/Modals/ReturnModal';
import SubscribeModal from '../../../components/Modals/SubscribeModal';
import bg from '../../../public/modal/background.png';

export default function Shop() {
	const { state, dispatch } = useContext(Context);
	const cart = state.cart;
	const router = useRouter()
  	const { slug } = router.query
	
	const success = data.find(item => 
		item.id == slug
	);
	
	// SUBSCRIBE AND BASKET MODAL
	const [subscribeModal, setSubscribeModal] = useState(false);
	const [basketModal, setBasketModal] = useState(false);
	const subscribe = async(ev) => {
		ev.preventDefault();
		setSubscribeModal(!subscribeModal);
	}
	const basket = async(ev) => {
		ev.preventDefault();
		setBasketModal(!basketModal);
	}
	
	const [returnModal, setReturnModal] = useState(false);
	const [deliveryModal, setDeliveryModal] = useState(false);
	const openReturnModal = async(ev) => {
		ev.preventDefault();
		setReturnModal(!returnModal);
	}
	const openDeliveryModal = async(ev) => {
		ev.preventDefault();
		setDeliveryModal(!deliveryModal);
	}

	function price(numb) {
		if (!numb) 
			return numb;

		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}
	
	const [option, setOption] = useState(1);
	const showCharacteristics = async(ev) => {
		ev.preventDefault();
		setOption(1);
	}
	const showDescription = async(ev) => {
		ev.preventDefault();
		setOption(2);
	}

	const [total, setTotal] = useState();
	useEffect(() => {
		const totalArray = cart.map(item =>
			(item.quantity * item.product.price *  (100 - item.product.sale) / 100)
		)
		setTotal(totalArray.reduce((acc, curr) => acc + Number(curr), 0));
	}, [cart]);

	const handleClick = async(ev) => {
		ev.preventDefault();
		dispatch({
			type: 'ADD_TO_CART',
			payload: success,
		})
		if (ev.target.id == 1 && total >= 10000)
			router.push('/order');
		else
			router.push('/shop/catalog/1');
	}

	const [showSale, setShowSale] = useState(false);
	const openSaleBox = async(ev) => {
		ev.preventDefault();
		setShowSale(!showSale);
	}
	
	const [showWhole, setShowWhole] = useState(false);
	const openWholeText = async(ev) => {
		ev.preventDefault();
		setShowWhole(!showWhole);
	}

	return (
		<div>
			<Head>
				<title>ЧЕКМАРКЕТ</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>

			{ slug !== undefined ? 
				success ? 
					<div>
						{ returnModal ? <ReturnModal close={ openReturnModal } /> : null };
						{ deliveryModal ? <DeliveryModal close={ openDeliveryModal } /> : null };
						{ basketModal ? <BasketModal close={ basket } /> : null };
						{ subscribeModal ? <SubscribeModal modal={ subscribe } /> : null };

						<Navbar modal={ basket }/>

						<LogoContainer>
							<div className='logo-container'>
								<div className='logo-box'>
									<img src='/home/logo.svg' alt='logo' className='logo' />
								</div>
							</div>
						</LogoContainer>

						<Wrapper>
							<div className='content'>
								<div className='image-box'>
									<Image src={ success.image.src } alt='blog image' width={ 370 } height={ 370 } layout='fixed' />
								</div>

								<div className='text-box'>
									<h6>{ success.name }</h6>

									<div className='icons'>
										<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
										<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
										<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
									</div>

									<p className={ (success.inStock === true) ? 'product-instock' : 'product-notinstock' }>
										{ (success.inStock === true) ? 'В наличии' : (success.onOrder === true) ? 'Под заказ' : 'Нет в наличии' }
										<span> | Оптом и в розницу</span>
									</p>
									<p>Минимальная сумма заказа на сайте — 10000 тг.</p>
												
									<div className='delivery'>
										<p style={{ width: '31.25rem' }}>Возврат товара в течение 14 дней <b>по договоренности</b></p>
										<p className='link button' onClick={ openReturnModal }>Подробнее</p>
									</div>

									<div className='box button' onClick={ openDeliveryModal }>
										<p>Условия оплаты и доставки</p>
									</div>

									{ (success.sale === null) ?
										<div className='price'>
											<h3 className='product-price'>{ price(success.price) } тг</h3>
										</div>
											:
										<div className='price'>
											<h3 className='old-product-price'>{ price(success.price * (100 - success.sale) / 100) }</h3>
											<h3 className='product-price'>{ price(success.price) } тг.</h3>
										</div>
									}

									<div className='wholesale' onClick={ openSaleBox }>
										<p className='link'>Показать оптовые цены</p>
										<p style={ (window.innerWidth > 992) ? { color: 'var(--clr-primary-1)' } : { height: '1.5625rem', color: 'var(--clr-primary-1)', fontSize: '25px' } }>
											{ (window.innerWidth > 992) ? '<' : '⌄' }
										</p>
										<div className={ (showSale === true) ? 'show' : 'hide' }>
											<p style={{ fontWeight: '600', margin: '0 1.25rem 0.625rem' }}>800 тг. / шт.</p>
											<p>при заказе от 600 шт.</p>
										</div>
									</div>

									{ (success.inStock === false && success.onOrder === false) ?
										<div className='buttons'>
											<div className='nonactive-button'>
												<Button blog={ true } text={ 'Недоступно' } />
											</div>
										</div>
											:
										<div id='1' className='buttons'>
											<div href='/order' id='1' className='purchase-button' onClick={ handleClick }>
												<Button id='1' blog={ true } text={ 'Купить' } />
											</div>
											<div className='basket-button' onClick={ handleClick }>
												<Button blog={ true } text={ 'В корзину' } />
											</div>
										</div>
									}	
								</div>

								<Link href='/shop/catalog/1' className='back-button'>
									<Image src='/shop/arrow2.svg' alt='arrow icon' width={ 40 } height={ 10 } layout='fixed' />
									<p>Вернуться к каталогу</p>
								</Link>
											
								<div className='info-box'>
									<div className='info-header'>
										<div className={ option === 1 ? 'active button' : 'header-button button' }>
											<h5 onClick={ showCharacteristics }>Характеристики</h5>
										</div>
										<div className={ option === 2 ? 'active button' : 'header-button button' }>
											<h5 onClick={ showDescription }>Описание</h5>
										</div>
									</div>
											
									{ option === 1 ?
										<div className='info-content'>
											{ (window.innerWidth <= 992) ? <h5>Характеристики</h5> : null }
											<ul className='info-menu'>
												<li className='info-item'>
													<p className='characteristic'>Производитель</p>
													<p className='info'>{ success.manufacturer }</p>
												</li>
												<li className='info-item'>
													<p className='characteristic'>{ (window.innerWidth > 992) ? 'Страна производитель' : 'Страна' }</p>
													<p className='info'>{ success.producingCountry }</p>
												</li>
												<li className='info-item'>
													<p className='characteristic'>Метод печати</p>
													<p className='info'>{ success.printMethod }</p>
												</li>
												<li className='info-item'>
													<p className='characteristic'>Тип намотки</p>
													<p className='info'>{ success.windingType }</p>
												</li>
											</ul>
										</div>
											:
										<div className='info-menu'>{ success.text }</div>
									}
									{ (window.innerWidth <= 992) ? 
										<>
											<div className='info-content'>
												{ (window.innerWidth <= 992) ? <h5>Описание</h5> : null }
												<div className={ showWhole ? 'info-menu' : 'info-menu hide' }>{ success.text }</div> 
												{ (window.innerWidth <= 992) ? 
													<div style={{ display: 'flex', alignItems: 'center', marginTop: '1.25rem', cursor: 'pointer' }} onClick={ openWholeText }>
														<p style={{ lineHeight: '1.5625rem', fontSize: '16px', fontWeight: '600', marginRight: '0.625rem' }}>
															{ showWhole ? 'Открыть полностью' : 'Закрыть' }
														</p>
														<p style={{ lineHeight: '1.25rem', color: 'var(--clr-primary-1)', fontSize: '32px', marginBottom: '0.3125rem' }}>⌄</p>
													</div>
														:
													null 
												}
											</div>
											<div className='return-content'>
												<h5>Условия возврата и обмена</h5>
												<div className='return-text'>
													<p>Возврат товара в течение 14 дней <b>по договоренности</b></p>
												</div>
												<div className='return-button' onClick={ openReturnModal }>
													<Button text={ 'Подробнее' } />
												</div>
											</div>
											
											<div className='delivery-content'>
												<h5>Условия оплаты и доставки</h5>
												<div className='delivery-text'>
													<p>Самовывоз</p>
													<p>Курьером</p>
												</div>
												<div className='delivery-button' onClick={ openDeliveryModal }>
													<Button text={ 'Подробнее' } />
												</div>
											</div>
										</>
											: 
										<></> 
									}
								</div>
							</div>
						</Wrapper>
															
						<Footer modal={ subscribe } />
					</div>
						:
					<Error/>
					:
				<></>
			}
		</div>
	);
}

const LogoContainer = styled.section`
	@keyframes animate {
		50%, 60%, 70%, 100% {
			opacity: 100%;
		} 0%, 55%, 65% {
			opacity: 0;
		}
	}

	@keyframes logoAnimation {
		0% {
			top: 0;
			opacity: 0;
		} 5% {
			opacity: 1;
		} 50% {
			top: 100%;
		} 95% {
			opacity: 1;
		} 100% {
			top: 0;
			opacity: 0;
		}
	}

	display: none;

	@media (max-width: 992px) {
		display: flex;
		align-items: center;
		background-image: url(${ bg.src }); 
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 23.75rem;
		margin-top: 1.5625rem;
		padding: 5.625rem 0;

		.logo-box {
			position: relative;
			width: calc(100% - 39.0421vw * 2);
			margin: 0 39.0421vw;
		}

		.logo-box:before {
			content: '';
			position: absolute;
			width: calc(100vw - 39.0421vw * 2);
			height: 0.1rem;
			background-color: var(--clr-primary-1);
			opacity: 0;
			animation: logoAnimation 2s linear;
		}

		.logo-box:active {
			animation: animate 1.2s linear;
		}

		.logo {
			width: calc(100vw - 39.0421vw * 2);
			animation: animate 1.2s linear;
		}
	}

	@media (max-width: 650px) {
		height: 52.778vw;
		padding: 11.11112vw 0;
	
		.logo-box {
			width: 33.33334vw;
			margin: 0 33.33334vw;
		}
		
		.logo-box:before {
			width: calc(100vw - 33.33334vw * 2);
		}
	
		.logo {
			width: 33.33334vw;
		}
	}
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 14.375rem 0 10.625rem;

	@keyframes animate3 {
		0% {
			width: 25%;
			left: -0.3125rem;
		} 100% {
			width: 100%;
			left: 0;
		}
	}

	.content {
		display: grid;
		gap: 0 2.5rem;
	}

	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28.75rem;
		height: 31.25rem;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-primary-4);
	}

	.text-box {
		width: 41.25rem;
		margin-top: 0.625rem;
	}

	.text-box h6 {
		line-height: 2.5rem;
		font-size: 20px;
		font-weight: 600;
	}

	.icons {
		height: 0.9375rem;
		margin: 0.625rem 0 0.9375rem;
	}

	.text-box p {
		line-height: 1.875rem;
		font-size: 18px;
		margin-bottom: 0.625rem;
	}

	.product-instock,
	.product-notinstock {
		font-weight: 400;
	}
		
	.product-instock {
		color: var(--clr-primary-7);
	}
		
	.product-notinstock {
		color: var(--clr-primary-1);
	}

	.product-instock span,
	.product-notinstock span {
		font-weight: 300;
		color: var(--clr-black);
	}

	.delivery {
		display: flex;
	}

	.link  {
		text-decoration: underline;
	}

	.box {
		width: 16.25rem;
		height: 3.125rem;
		border: 1px dashed var(--clr-black);
		margin: 0.625rem 0 1.875rem;
	}

	.box p {
		text-align: center;
		margin-top: 0.625rem;
	}

	.price {
		position: relative;
		display: flex;
		gap: 1.25rem;
		padding-top: 1.25rem;
		margin-bottom: 0.625rem;
	}

	.price:before {
		content: '';
		top: 0;
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: var(--clr-primary-4);
	}

	.old-product-price,
	.product-price {
		line-height: 3.75rem;
	}

	.old-product-price {
		text-decoration-line: line-through;
		text-decoration-color: var(--clr-primary-1);
		color: var(--clr-primary-4);
	}

	.wholesale {
		display: flex;
		align-items: center;
	}

	.wholesale .link {
		margin-right: 0.3125rem;
	}

	.wholesale div {
		display: flex;
	}

	.buttons {
		display: flex;
		width: 35rem;
		gap: 2.5rem;
		margin-top: 0.625rem;
	}

	.purchase-button,
	.basket-button,
	.nonactive-button .button {
		width: 16.25rem;
		height: 3.75rem;
		border-radius: 0.625rem;
	}

	.purchase-button p,
	.basket-button p,
	.nonactive-button p {
		font-size: 20px;
		font-weight: 700;
		margin: 0;
	}

	.basket-button .button {
		background-color: transparent;
		border: 1px solid var(--clr-primary-1);
	}

	.basket-button .text {
		color: var(--clr-primary-1);
	}

	.nonactive-button .button {
		background-color: var(--clr-primary-4);
	}

	.back-button,
	.info-box {
		grid-column-start: 1;
		grid-column-end: 3;
	}

	.back-button {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 0.625rem;
		margin: 1.875rem 0 6.75rem
	}

	.back-button p {
		font-size: 18px;
	}

	.info-header {
		display: flex;
		gap: 2.5rem;
	}

	.info-header h5 {
		line-height: 2.5rem;
		font-size: 22px;
		font-weight: 600;
		padding-bottom: 0.3125rem;
	}
	
	.info-header .active {
		position: relative;
	}

	.info-header .active:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		left: 0;
		background-color: var(--clr-primary-1);
	}
	
	.header-button {
		position: relative;
	}

	.header-button:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		left: 0;
	}
	
	.header-button:hover:after {
		background-color: var(--clr-primary-1);
		animation: animate3 0.3s linear;
	}

	.info-box {
		width: 47.5rem;
	}

	.info-menu {
		margin-top: 3.4375rem;
	}

	.info-menu p {
		line-height: 1.6749rem;
		font-size: 18px;
	}
	
	.info-item {
		display: flex;
		gap: 5.625rem;
		margin-top: 1.25rem;
	}

	.info-item p {
		line-height: 1.875rem;
		width: 13.125rem;
	}

	.characteristic {
		font-weight: 400;
	}

	.info {
		font-weight: 300;
	}

	.description {
		margin-bottom: 2.5rem;
	}

	.description ul {
		list-style-type: disc;
		padding-left: 1.25rem;
	}

	@media (max-width: 1440px) {
		padding: 12.5rem 0 9.375rem;

		.content {
			gap: 0 1.875rem;
		}

		.image-box {
			width: 28.125rem;
		}

		.text-box {
			width: 39.375rem;
		}

		.back-button {
			margin: 1.875rem 0 5.5rem
		}
	}

	@media (max-width: 1220px) {
		padding: 11.25rem 0 7.5rem;

		.content {
			gap: 0 1.25rem;
		}

		.image-box {
			width: 23.4375rem;
			height: 26.25rem;
		}

		.image-box img {
			width: 20rem;
			height: 20rem;
		}

		.text-box {
			width: 32.655rem;
		}

		.text-box h6 {
			line-height: 1.875rem;
			font-size: 18px;
		}

		.icons,
		.icons img {
			height: 0.75rem;
		}

		.text-box p {
			line-height: 1.5625rem;
			font-size: 16px;
			margin-bottom: 0.3125rem;
		}

		.box {
			width: 15rem;
			height: 2.8125rem;
			margin-bottom: 1.5625rem;
		}
		
		.price {
			padding-top: 1rem;
		}

		.old-product-price,
		.product-price {
			line-height: 2.8125rem;
			font-size: 34px;
		}

		.purchase-button,
		.basket-button,
		.nonactive-button .button {
			width: 13.75rem;
			height: 3.5625rem;
		}

		.purchase-button p,
		.basket-button p,
		.nonactive-button p {
			font-size: 17px;
		}
	
		.back-button p {
			font-size: 17px;
		}

		.info-header h5 {
			line-height: 2.1875rem;
			font-size: 21px;
		}
		
		.info-menu {
			margin-top: 2.8125rem;
		}
		
		.info-menu p {
			font-size: 16px;
		}
		
		.info-item {
			margin-top: 0.9375rem;
		}
		
		.description {
			margin-bottom: 1.875rem;
		}
	}

	@media (max-width: 992px) {
		padding: 3.75rem 0 5rem;

		.content {
			display: flex;
			flex-direction: column;
			width: 73.846vw;
		}

		.image-box,
		.text-box,
		.info-box {
			width: 73.846vw;
		}

		.image-box {
			height: 100%;
			background-color: var(--clr-white);
			border: none;
			border-radius: 0.625rem 0.625rem 0 0;
			padding: 1.875rem 1.875rem 0.9375rem;
		}

		.text-box {
			background-color: var(--clr-white);
			border-radius: 0 0 0.625rem 0.625rem;
			margin: 0;
			padding: 0.9375rem 1.875rem 1.875rem;
		}

		.text-box h6 {
			line-height: 1.5625rem;
			font-size: 17px;
		}

		.text-box p {
			line-height: 1.25rem;
			font-size: 15px;
			margin-bottom: 0.625rem;
		}

		.icons,
		.delivery,
		.box,
		.back-button,
		.info-header {
			display: none;
		}

		.price {
			margin: 1.25rem 0 0;
			padding-top: 0.625rem;
		}

		.old-product-price,
		.product-price {
			line-height: 2.1875rem;
			font-size: 30px;
		}

		.wholesale {
			position: relative;
		}

		.wholesale .link {
			text-decoration: none;
		}
	
		.wholesale .show {
			position: absolute;
			display: block;
			border: 1px solid var(--clr-primary-4);
			border-radius: 0.625rem;
			background-color: var(--clr-white);
			top: 1.875rem;
			padding: 1.25rem;
			z-index: 1;
		}

		.wholesale .hide {
			display: none;
		}

		.info-menu {
			width: 100%;
		}

		.buttons {
			display: flex;
			width: 61.538vw;
			gap: 1.25rem;
		}
	
		.purchase-button,
		.basket-button,
		.nonactive-button .button,
		.return-button .button,
		.delivery-button .button {
			width: 29.231vw;
			height: 2.8125rem;
			border-radius: 0.625rem;
		}
	
		.purchase-button p,
		.basket-button p,
		.nonactive-button p,
		.return-button p,
		.delivery-button p {
			font-size: 15px;
			margin: 0;
		}

		.info-content,
		.return-content,
		.delivery-content {
			background-color: var(--clr-white);
			border-radius: 0.625rem;
			margin-top: 1.25rem;
			padding: 1.875rem;
		}

		.info-content h5,
		.return-content h5,
		.delivery-content h5 {
			position: relative;
			line-height: 1.875rem;
			font-size: 20px;
			font-weight: 600;
			color: var(--clr-primary-1);
			margin-bottom: 1.25rem;
			padding-bottom: 1.25rem;
		}

		.info-content h5:after,
		.return-content h5:after,
		.delivery-content h5:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: 0;
			left: 0;
			background-color: var(--clr-primary-4);
		}

		.info-menu,
		.description {
			margin: 0;
		}

		.info-item {
			margin-top: 0.9375rem;
		}
		
		.info-item p {
			line-height: 1.5625rem;
		}

		.br {
			content: '';
			display: block;
			margin: 0.75rem;
		}

		.hide {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		.return-text,
		.delivery-text {
			margin-bottom: 1.5625rem;
		}

		.return-text p,
		.delivery-text p {
			line-height: 1.5625rem;
			font-size: 16px;
			margin-top: .9375rem;
		}
	}

	@media (max-width: 650px) {
		padding: 1.875rem 0 4.375rem;

		.content,
		.image-box,
		.text-box,
		.info-box {
			width: 88.889vw;
		}

		.image-box {
			padding: 1.25rem 1.25rem 0.625rem;
		}

		.image-box img {
			width: 17.5rem;
			height: 17.5rem;
		}

		.text-box {
			padding: 0.625rem 1.25rem 1.25rem;
		}

		.text-box h6 {
			font-size: 15px;
		}

		.text-box p {
			font-size: 14px;
		}

		.old-product-price,
		.product-price {
			line-height: 2.5rem;
			font-size: 24px;
		}

		.buttons {
			display: flex;
			width: 61.538vw;
			gap: 1.25rem;
		}
	
		.purchase-button,
		.basket-button,
		.nonactive-button .button,
		.return-button .button,
		.delivery-button .button {
			width: 37.5vw;
			height: 2.5rem;
		}
	
		.purchase-button p,
		.basket-button p,
		.nonactive-button p,
		.return-button p,
		.delivery-button p {
			font-size: 13px;
		}

		.info-content,
		.return-content,
		.delivery-content {
			margin-top: 0.625rem;
			padding: 1.25rem;
		}

		.info-content h5,
		.return-content h5,
		.delivery-content h5 {
			line-height: 1.25rem;
			font-size: 16px;
		}

		.info-item {
			gap: 0.625rem;
			margin-top: 0.625rem;
		}
		
		.info-item p {
			width: 37.5vw;
			line-height: 1.25rem;
		}

		.br {
			margin: 0.65rem;
		}

		.hide {
			-webkit-line-clamp: 4;
		}

		.return-text,
		.delivery-text {
			margin-bottom: 1.25rem;
		}

		.return-text p,
		.delivery-text p {
			line-height: 1.25rem;
			font-size: 15px;
			margin-top: 0.625rem;
		}
	}
`
