// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/ui', 'pruvious', '@nuxt/eslint', 'nuxt-lazytube'],
	devtools: { enabled: true },
	// routeRules: {
	// 	// Products page generated on demand, revalidates in background, cached until API response changes
	// 	'/': { swr: true },
	// },
	compatibilityDate: '2024-11-01',
	vite: {
		build: {
			rollupOptions: {
				external: [
					'sharp',
				],
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
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
