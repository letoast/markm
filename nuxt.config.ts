// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'pruvious',
		'@nuxt/ui',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxtjs/device',
		'@nuxt/scripts',
		'@vueuse/nuxt',
		// 'v-gsap-nuxt',
		'motion-v/nuxt',
	],
	devtools: { enabled: true },
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'shortcut icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				{ name: 'apple-mobile-web-app-title', content: 'All Conti Sports' },
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
			htmlAttrs: {
				class: 'scroll-smooth',
			},
		},
	},
	css: ['./assets/css/main.css'],
	ui: {
		colorMode: false,
	},
	experimental: {
		inlineRouteRules: true,
	},
	// routeRules: {
	// 	'/**': {
	// 		isr: 3600,
	// 	},
	// 	'/api/**': {
	// 		isr: false,
	// 		cache: false,
	// 		swr: false,
	// 		static: false,
	// 	},
	// 	'/dashboard/**': {
	// 		isr: false,
	// 		cache: false,
	// 		swr: false,
	// 		static: false,
	// 	},
	// },
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
	fonts: {
		families: [
			{
				name: 'Inter',
				provider: 'google',
				weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
			},
		],
	},
	pruvious: {
		database: process.env.PG as string,
		jwt: {
			secretKey: process.env.JWT_SECRET as string,
		},
		pageCache: false,
		uploads: {
			drive: {
				type: 's3',
				baseUrl: process.env.S3_BASE_URL as string,
				bucket: process.env.S3_BUCKET as string,
				endpoint: process.env.S3_ENDPOINT as string,
				key: process.env.S3_KEY as string,
				region: process.env.S3_REGION as string,
				secret: process.env.S3_SECRET as string,
				forcePathStyle: true,
			},
		},
	},
})
