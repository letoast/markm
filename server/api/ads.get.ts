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

	const result = await query('ads')
		.select(['title', 'video', 'image', 'id'])
		.where('status', '=', 'published')
		.populate()
		.paginate(1, 100)

	return {
		...result,
	}
})
