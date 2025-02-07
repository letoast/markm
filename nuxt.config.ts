// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/ui', 'pruvious', '@nuxt/eslint', 'nuxt-lazytube'],
	devtools: { enabled: true },
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
		database: 'postgresql://postgres.qgjwxwzxmnfoyliknaly:HahaLala25!@aws-0-us-west-1.pooler.supabase.com:6543/postgres',
		jwt: {
			secretKey: 'tjEPg4NPj9Uq7IB1BTrpKHRFVqqxoO4lcpqdLIO8MwvNjLMisa7LgeNU4cJUfbK7',
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
