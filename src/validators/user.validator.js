import Joi from "joi";

const userValidator = Joi.object({
	name: Joi.string().regex(/^[a-zA-ZА-Яёєї ]{2,25}$/).required().messages({
		'string.pattern.base': 'Тільки букви!'
	}),
	username: Joi.string().regex(/^[a-zA-ZА-Яёєї ]{2,25}$/).required().messages({
		'string.pattern.base': 'Тільки букви!'
	}),
})

export {userValidator};