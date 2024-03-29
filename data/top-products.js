import image1 from '../public/product-images/image1.png';
import image2 from '../public/product-images/image2.png';
import image3 from '../public/product-images/image3.png';
import image4 from '../public/product-images/image4.png';
import image5 from '../public/product-images/image5.png';
import image6 from '../public/product-images/image6.png';

const topProducts = [
	{
		id: 1,
		name: 'Сенсорный POS-терминал Mulex A8 MSR',
		image: image1,
		price: 312400,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 2,
		name: 'Принтер этикеток TSC TTP-244 СЕ',
		image: image2,
		price: 121000,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: false,
		onOrder: true
	}, {
		id: 3,
		name: 'Самоклеящиеся термоэтикетки 29*20 (1600 шт)',
		image: image3,
		price: 900,
		sale: 20,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 4,
		name: 'Чековая лента 57*40*12 (ТЕРМОЛЕНТА)',
		image: image4,
		price: 250,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 5,
		name: 'Счётчик подсчёта посетителей D-FLY COUNTER',
		image: image5,
		price: 60000,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 6,
		name: 'Самоклеящиеся термоэтикетки 58*40*600 (ВЕСОВАЯ ЛЕНТА)',
		image: image6,
		price: 850,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 7,
		name: 'Сенсорный POS-терминал Mulex A8 MSR',
		image: image1,
		price: 312400,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}, {
		id: 8,
		name: 'Принтер этикеток TSC TTP-244 СЕ',
		image: image2,
		price: 121000,
		sale: null,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: false,
		onOrder: true
	}, {
		id: 9,
		name: 'Самоклеящиеся термоэтикетки 29*20 (1600 шт)',
		image: image3,
		price: 900,
		sale: 20,
		manufacturer: 'Kohler',
		producingCountry: 'Россия',
		printMethod: 'Термопечать',
		windingType: 'Наружная',
		text: <div>
			<p>Термоэтикетка 58*60мм, 400шт., . Самоклеящаяся этикетка для печати на принтерах штрих-кода: Zebra, Argox, Citizen, TSC. Идеально  подходит для магазинов одежды. супермаркетов, Складов, и производителей товаров.</p>
			<br/>
			<p>Термоэтикетка 58*60 мм (самоклеющаяся термонаклейка) предназначена для маркировки продукции и может применяться в различных сферах торговли и промышленности. Также, термоэтикетка 58*60 незаменима на предприятиях, пользующихся системами автоматизированного контроля и учета с применением штрихового кодирования.</p>
			<br/>
			<p>Термоэтикетка 58*60мм применяется:</p>
			<ul>
				<li>на предприятиях по производству и упаковке продуктов питания, промышленных товаров;</li>
				<li>в супермаркетах на чекопечатающих весах;</li>
				<li>в аптеках;</li>
				<li>на транспортных предприятиях, связанных с логистикой;</li>
				<li>в компаниях по оказанию почтовых услуг и т.д.</li>
			</ul>
			<br/>
			<p>Самоклеющиеся термонаклейки 58*60 являются самыми недорогими и, как нельзя лучше, подходят для кратковременной маркировки различной продукции.</p>
		</div>,
		inStock: true,
		onOrder: false
	}
]

export default topProducts;
