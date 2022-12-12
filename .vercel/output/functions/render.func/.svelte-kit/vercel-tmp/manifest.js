export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["back2.webp","background.jpg","favicon.png"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f348e42c.js","imports":["_app/immutable/start-f348e42c.js","_app/immutable/chunks/index-d6629a5e.js","_app/immutable/chunks/singletons-e83d6b5b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
