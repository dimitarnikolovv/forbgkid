const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["fonts/Gilroy-Black.woff","fonts/Gilroy-Black.woff2","fonts/Gilroy-BlackItalic.woff","fonts/Gilroy-BlackItalic.woff2","fonts/Gilroy-Bold.woff","fonts/Gilroy-Bold.woff2","fonts/Gilroy-BoldItalic.woff","fonts/Gilroy-BoldItalic.woff2","fonts/Gilroy-ExtraBold.woff","fonts/Gilroy-ExtraBold.woff2","fonts/Gilroy-ExtraBoldItalic.woff","fonts/Gilroy-ExtraBoldItalic.woff2","fonts/Gilroy-Heavy.woff","fonts/Gilroy-Heavy.woff2","fonts/Gilroy-HeavyItalic.woff","fonts/Gilroy-HeavyItalic.woff2","fonts/Gilroy-Light.woff","fonts/Gilroy-Light.woff2","fonts/Gilroy-LightItalic.woff","fonts/Gilroy-LightItalic.woff2","fonts/Gilroy-Medium.woff","fonts/Gilroy-Medium.woff2","fonts/Gilroy-MediumItalic.woff","fonts/Gilroy-MediumItalic.woff2","fonts/Gilroy-Regular.woff","fonts/Gilroy-Regular.woff2","fonts/Gilroy-RegularItalic.woff","fonts/Gilroy-RegularItalic.woff2","fonts/Gilroy-SemiBold.woff","fonts/Gilroy-SemiBold.woff2","fonts/Gilroy-SemiBoldItalic.woff","fonts/Gilroy-SemiBoldItalic.woff2","fonts/Gilroy-Thin.woff","fonts/Gilroy-Thin.woff2","fonts/Gilroy-ThinItalic.woff","fonts/Gilroy-ThinItalic.woff2","fonts/Gilroy-UltraLight.woff","fonts/Gilroy-UltraLight.woff2","fonts/Gilroy-UltraLightItalic.woff","fonts/Gilroy-UltraLightItalic.woff2","icons/check-mark-24x24.svg","icons/check-mark-48x48.svg","icons/favicon.png","icons/favicon.svg","icons/right-arrow-svgrepo-com (2).svg","images/desk.png","images/forbgkids-logo-bg.png","images/forbgkids-logo-only.png","images/it_2022.jpg","images/literature.png","images/math_test.jpg","images/talents.jpeg"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-61f605ce.js","js":["start-61f605ce.js","chunks/index-4681b812.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "centre",
				pattern: /^\/centre\/?$/,
				names: [],
				types: [],
				path: "/centre",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "donate",
				pattern: /^\/donate\/?$/,
				names: [],
				types: [],
				path: "/donate",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "about/candidate-criteria",
				pattern: /^\/about\/candidate-criteria\/?$/,
				names: [],
				types: [],
				path: "/about/candidate-criteria",
				shadow: null,
				a: [0,7,8],
				b: [1]
			},
			{
				type: 'page',
				id: "kids",
				pattern: /^\/kids\/?$/,
				names: [],
				types: [],
				path: "/kids",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				path: "/news",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "en",
				pattern: /^\/en\/?$/,
				names: [],
				types: [],
				path: "/en",
				shadow: null,
				a: [0,11],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
