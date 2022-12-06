export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Gilroy-Black.woff","fonts/Gilroy-Black.woff2","fonts/Gilroy-BlackItalic.woff","fonts/Gilroy-BlackItalic.woff2","fonts/Gilroy-Bold.woff","fonts/Gilroy-Bold.woff2","fonts/Gilroy-BoldItalic.woff","fonts/Gilroy-BoldItalic.woff2","fonts/Gilroy-ExtraBold.woff","fonts/Gilroy-ExtraBold.woff2","fonts/Gilroy-ExtraBoldItalic.woff","fonts/Gilroy-ExtraBoldItalic.woff2","fonts/Gilroy-Heavy.woff","fonts/Gilroy-Heavy.woff2","fonts/Gilroy-HeavyItalic.woff","fonts/Gilroy-HeavyItalic.woff2","fonts/Gilroy-Light.woff","fonts/Gilroy-Light.woff2","fonts/Gilroy-LightItalic.woff","fonts/Gilroy-LightItalic.woff2","fonts/Gilroy-Medium.woff","fonts/Gilroy-Medium.woff2","fonts/Gilroy-MediumItalic.woff","fonts/Gilroy-MediumItalic.woff2","fonts/Gilroy-Regular.woff","fonts/Gilroy-Regular.woff2","fonts/Gilroy-RegularItalic.woff","fonts/Gilroy-RegularItalic.woff2","fonts/Gilroy-SemiBold.woff","fonts/Gilroy-SemiBold.woff2","fonts/Gilroy-SemiBoldItalic.woff","fonts/Gilroy-SemiBoldItalic.woff2","fonts/Gilroy-Thin.woff","fonts/Gilroy-Thin.woff2","fonts/Gilroy-ThinItalic.woff","fonts/Gilroy-ThinItalic.woff2","fonts/Gilroy-UltraLight.woff","fonts/Gilroy-UltraLight.woff2","fonts/Gilroy-UltraLightItalic.woff","fonts/Gilroy-UltraLightItalic.woff2","icons/check-mark-24x24.svg","icons/check-mark-48x48.svg","icons/favicon.png","icons/favicon.svg","icons/right-arrow-svgrepo-com (2).svg","images/donate_now.png","images/forbgkids-logo-only.png"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-d5fab760.js","imports":["_app/immutable/start-d5fab760.js","_app/immutable/chunks/index-d19a3ec2.js","_app/immutable/chunks/singletons-65e2669a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/about/[slug]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/centre/(shared)",
				pattern: /^\/centre\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/centre/[slug=integer]",
				pattern: /^\/centre\/([^/]+?)\/?$/,
				names: ["slug"],
				types: ["integer"],
				optional: [false],
				page: { layouts: [0,4], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/centre/[slug=integer]/[nested_slug]",
				pattern: /^\/centre\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["slug","nested_slug"],
				types: ["integer",null],
				optional: [false,false],
				page: { layouts: [0,4], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/donate",
				pattern: /^\/donate\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/donate/[slug]",
				pattern: /^\/donate\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0,5], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/form",
				pattern: /^\/form\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/kids",
				pattern: /^\/kids\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/news/[slug]",
				pattern: /^\/news\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/projects/(shared)",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/projects/(shared)/awards",
				pattern: /^\/projects\/awards\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/projects/(shared)/calendar",
				pattern: /^\/projects\/calendar\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/projects/(shared)/privacy",
				pattern: /^\/projects\/privacy\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/projects/[projectId=integer]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				names: ["projectId"],
				types: ["integer"],
				optional: [false],
				page: { layouts: [0,7], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/projects/[projectId=integer]/[slug]",
				pattern: /^\/projects\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["projectId","slug"],
				types: ["integer",null],
				optional: [false,false],
				page: { layouts: [0,7], errors: [1,,], leaf: 26 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: integer } = await import('./entries/matchers/integer.js')
			return { integer };
		}
	}
};
