// import { isPositiveInteger } from '#pruvious'
import {
	query,
	// resolvePagePath
} from '#pruvious/server'

export default defineEventHandler(async (event) => {
	// const qs = getQuery(event)
	//   const page = qs.page ? Number(qs.page) : 1

	//   if (!isPositiveInteger(page)) {
	//     setResponseStatus(event, 400)
	//     return "The 'page' query parameter must be a positive integer"
	//   }

	// const tags = await query('tags')
	// 	.select({
	// 		id: true,
	// 		title: true,
	// 	})
	// 	.populate()

	const ads = await query('ads')
		.select({
			title: true,
			video: true,
			image: true,
			id: true,
			tags: true,
		})
		.where('status', '=', 'published')
		.populate()
		.paginate(1, 100)

	return {
		...ads,
	}
})
