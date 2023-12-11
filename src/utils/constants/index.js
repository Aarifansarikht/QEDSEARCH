import {Dimensions, Platform, StatusBar} from 'react-native';
import {color} from '../colors';
import {Font_SourceSansPro_Regular} from '../typograpy';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

export const BASE_URL = 'https://api.qedvaultdev.com';

//Production Url 09/Nov/2023 Start

// export const BASE_URL = 'https://api.appqedvault.com';

export const PRIVACY_POLICY_URL = 'https://appqedvault.com/privacy_policy';
export const TERMS_AND_CONDITIONS_URL = 'https://appqedvault.com/terms';

//Production Url End

// dev variables

//export const BASE_URL = 'https://apidev.qedvaultdev.com';
// export const PRIVACY_POLICY_URL = 'https://appdev.qedvaultdev.com/privacy_policy';
// export const TERMS_AND_CONDITIONS_URL = 'https://appdev.qedvaultdev.com/terms_mobile';

// we can't use /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/ because of RangeError: Maximum regex stack depth reached, js engine: hermes
export const EmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export const usernameRegex = /^[a-zA-Z0-9\s]+$/;
export const TestSpecialCharacters = /^[^a-zA-Z0-9]+$/;
export const SIDE_SPACE = Platform.select({
  ios: 24,
  android: 20,
});
export const mandatory = {
  fontSize: 15,
  color: color.dangerColor,
  fontFamily: Font_SourceSansPro_Regular,
};
export const rawData = [
  {
    id: 1,
    image: [
      'https://cdn.shopify.com/s/files/1/0464/8645/4435/products/Dimond_2_grande.jpg?v=1617271306',
      'https://m.media-amazon.com/images/I/61O0wbIplIL._UL1000_.jpg',
      'https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m228238-0061.png?impolicy=v6-upright&imwidth=270',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNy4sHd-wCaqJ6sm3WsBDwocagCE4z8mtIk9iH3nlj8b1FpBxPNjEqEJpfAKlmNc4mZgk6129u3s&usqp=CAU&ec=48665701',
    ],
    category: 'watches',
    token: 20,
    name: 'Rolex',
    createdAt: '2022-12-20T14:46:48Z',
    code: 1425,
    status: 'active',
    owner: 'Jon Poul',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 2,
    image: [
      'https://images.carandbike.com/car-images/big/toyota/corolla-altis/toyota-corolla-altis.jpg?v=19',
      'https://stimg.cardekho.com/car-images/carexteriorimages/930x620/Toyota/Toyota-Corolla-Altis/front-left-side-047.jpg',
      'https://cdni.autocarindia.com/ExtraImages/20200403011929_Toyota-Corolla-Altis.jpg',
      'https://www.piston.my/wp-content/uploads/2019/09/2019-Toyota-Corolla-Altis.jpg',
    ],
    category: 'Automobile',
    token: 10,
    name: 'Toyota Altis',
    createdAt: '2021-07-31T17:52:23Z',
    code: 2512,
    status: 'active',
    owner: 'John Deo',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 3,
    image: [
      'https://images.91wheels.com//assets/b_images/main/models/cycle1607642392.png?width=360&q=40',
      'https://www.bikepanthi.com/wp-content/uploads/2011/09/atlas-roadsters-goldline-deluxe.jpg',
      'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/media/1052_1.webp',
      'https://5.imimg.com/data5/UH/AR/GLADMIN-64951747/atlas-atlas-peak-ibc-500x500.png',
      'https://www.compareprix.in/images/product/large/hercules-mtb-turbodrive-rocky-bicycle-large.jpeg',
    ],
    category: 'Bicycle',
    token: 25,
    name: 'Atlas Goldline',
    createdAt: '2022-10-15T20:34:07Z',
    code: 2536,
    status: 'active',
    owner: 'Petter Parker',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 4,
    image: [
      'https://5.imimg.com/data5/XL/TK/IF/SELLER-78850876/br1-500x500.jpeg',
      'https://india.ray-ban.com/pub/media/catalog/product/8/0/805289885948_1_7.jpg',
      'https://india.ray-ban.com/pub/media/catalog/product/8/0/805289304449_5.jpg',
      'https://india.ray-ban.com/pub/media/catalog/product/8/0/8056597260282_1_1.jpg',
      'https://www.eopticians.co.uk/img/56590/RB_3016_125651_51_altpic_1/RB_3016_125651_51.jpg?time=1622386704',
      'https://india.ray-ban.com/pub/media/catalog/product/cache/31cc5ad256d13496e740487cbcf523ed/8/0/8053672561531_1_4.jpg',
    ],
    category: 'Glasses',
    token: 10,
    name: 'Rayban',
    createdAt: '2021-08-02T17:30:30Z',
    code: 2222,
    status: 'active',
    owner: 'Jihun',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
  },
  {
    id: 5,
    image: [
      'https://m.media-amazon.com/images/I/81FjoDja7YL._UX569_.jpg',
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u0btvcvg2nejhaydjwmm/sportswear-t-shirt-zmMkxS.png',
      'https://scene7.zumiez.com/is/image/zumiez/image/Nike-SB-Craft-Logo-Black-T-Shirt-_336660.jpg',
      'https://mobile.yoox.com/images/items/12/12878700AI_14_f.jpg?impolicy=crop&width=387&height=490',
      'https://img01.ztat.net/article/spp-media-p1/dc4b2c20a22b457c83c4bbb0e01b01d2/d2527cff3cea4387b345843a46e8e2cf.jpg?imwidth=1800&filter=packshot',
      'https://data.mascheronistore.com/imgprodotto/just-do-it-t-shirt-man-black-white_64604_zoom.jpg',
    ],
    category: 'Shirt',
    token: 18,
    name: 'Nike',
    createdAt: '2021-07-29T23:25:00Z',
    code: 1245,
    status: 'active',
    owner: 'Jindo Doh',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 6,
    image: [
      'https://im.indiatimes.in/content/itimes/blog/2015/Jun/10/1433927548-gucci-bags.jpg?w=1200&h=900&cc=1',
      'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1618393505/476432_KHNRN_8642_003_057_0017_Light-Dionysus-GG-Supreme-super-mini-bag.jpg',
      'https://cdn-images.farfetch-contents.com/12/96/49/36/12964936_31615675_300.jpg',
      'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1586365204/631685_96IWB_8745_001_100_0000_Light.jpg',
      'https://i.etsystatic.com/16391404/r/il/78baeb/4412625446/il_fullxfull.4412625446_o1ja.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhXPEknvCdJ1quEER2-F6Cvv9wGpjAfivxLMNoRE2qw&usqp=CAU&ec=48665701',
    ],
    category: 'Purse',
    token: 5,
    name: 'Gucci',
    createdAt: '2022-09-10T08:27:09Z',
    code: 1212,
    status: 'active',
    owner: 'Seoul Fire',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 7,
    image: [
      'https://telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/front.png',
      'https://www.apple.com/tw/iphone-14-pro/images/key-features/hero/hero_space_black__d2ll5e0lazcm_large.jpg',
      'https://pbs.twimg.com/media/FcEv7YpacAoIIUW?format=jpg&name=4096x4096',
      'https://www.digitaltrends.com/wp-content/uploads/2022/09/iPhone-14-Pro-Back-Purple-Hand.jpg?p=1',
      'https://www.digitaltrends.com/wp-content/uploads/2022/09/apple-iphone-14-review-11.jpg?p=1',
      'https://www.cnet.com/a/img/resize/fbdc83435fa2517687044b19fae927ae78488f3f/hub/2022/09/14/51e9f35c-8b58-41d9-a445-47011f60cb25/apple-iphone-14-7953.jpg?auto=webp&fit=crop&height=1200&width=1200',
    ],
    category: 'Mobile',
    token: 22,
    name: 'Iphone 14',
    createdAt: '2022-03-19T17:42:26Z',
    code: 1425,
    status: 'active',
    owner: 'Kevin Hart',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 8,
    image: [
      'https://i.pcmag.com/imagery/reviews/048uqcL60FK6NeedR23Bfvo-2..v1605563567.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKc4e-IjoYt_RCZh_YPM_JUYCCkICNqsCkkJPPxR1BTzM0ScrXlD07ACrJjpXWSsbj3g7HHf-EV8w&usqp=CAU&ec=48665701',
      'https://cdn.mos.cms.futurecdn.net/6QbFZzDxe3LqFStGGksKLk.jpg',
      'https://www.macworld.com/wp-content/uploads/2023/01/m1-mac-mini-angle-100867263-orig-1.jpg?quality=50&strip=all&w=1024',
      'https://a509ffa457069f232d54-367906c62d2ea4630d8b048925bb94d7.ssl.cf1.rackcdn.com/hero-1605052378098.jpg',
      'https://apollo-singapore.akamaized.net/v1/files/d3fgm0abk0bz1-IN/image;s=850x0',
    ],
    category: 'Computer',
    token: 20,
    name: 'Mac Mini M1 Chip',
    createdAt: '2022-12-04T09:31:29Z',
    code: 1245,
    status: 'active',
    owner: 'Jason Mamoa',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 9,
    image: [
      'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100615221665069739_18567.jpg',
      'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100614151665065747_61316.jpg',
      'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100614101665065414_25983.jpg',
      'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100614211665066107_44767.jpg?tr=w-938,q-100,pr-true',
      'https://m.media-amazon.com/images/I/71tXFyVIUcL._SY355_.jpg',
      'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100612531665060825_99985.jpg',
    ],
    category: 'Furniture',
    token: 5,
    name: 'Durian',
    createdAt: '2022-10-25T16:19:57Z',
    code: 5486,
    status: 'active',
    owner: 'Lisa',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    serialNo: '1233QED',
    tokenId: '122324324',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
  },
  {
    id: 10,
    image: [
      'https://rukminim1.flixcart.com/image/612/612/l4ei1e80/shoe/g/c/v/-original-imagfb9vyvuakh5s.jpeg?q=70',
      'https://5.imimg.com/data5/LU/GA/TK/SELLER-17552598/skecher4-500x500.jpeg',
      'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/7/l/d/-original-imagg7eskyzegtvd.jpeg?q=70',
      'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/p/g/q/-original-imagg7esexjfweup.jpeg?q=70',
      'https://www.skechers.in/dw/image/v2/BGNZ_PRD/on/demandware.static/-/Sites-skechersin-Library/default/dw5ab426e1/Category-Landing/Category-Mobile/Mens-New/Mobile_Men_Lace-Ups.jpg?sw=780',
      'https://rukminim1.flixcart.com/image/832/832/kx50gi80/shoe/n/u/p/6-232106-7-skechers-bbk-original-imag9nvzq9tzzjn2.jpeg?q=70',
    ],
    category: 'Shoes',
    token: 10,
    name: 'Skechers',
    createdAt: '2021-10-06T06:48:13Z',
    code: 1215,
    status: 'active',
    owner: 'Meghan Fox',
    decription:
      'An ever-present challenge manifested in the brand’s ambition to perfect every component, question every method, and master every aspect of watchmaking expertise. ',
    note: "Alfred Davis and his brother-in-law Hans Wilsdorf founded Wilsdorf and Davis, the company that would eventually become Rolex SA, in London in 1905.[12] Wilsdorf and Davis's main commercial activity at the time involved importing Hermann Aegler's Swiss movements to England and placing them in watch cases made by Dennison and others. These early wristwatches were sold to many jewellers, who then put their own names on the dial. The earliest watches from Wilsdorf and Davis were usually hallmarked 'W & D' inside the caseback.",
    serialNo: '1233QED',

    tokenId: '122324324',
  },
];
