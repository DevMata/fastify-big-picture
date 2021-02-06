const fastify = require('fastify')({ logger: true });

fastify.route({
	method: 'GET',
	url: '/',
	schema: {
		querystring: { name: { type: 'string' } },
		response: {
			200: {
				type: 'object',
				properties: {
					hello: { type: 'string' },
				},
			},
		},
	},
	preHandler: async (request, reply) => {
		/* This could be awesomely useful for JWT and other validations */
		console.log('request: ', request);
		console.log('reply: ', reply);
	},
	handler: () => {
		return { hello: 'world' };
	},
});

const start = async () => {
	try {
		await fastify.listen(5000);
	} catch (error) {
		fastify.log.error(error);
		process.exit(1);
	}
};

start();
