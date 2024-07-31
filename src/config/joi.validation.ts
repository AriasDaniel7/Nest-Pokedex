import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3000),
  POKEAPI: Joi.required(),
  DEFAULT_LIMIT: Joi.number().default(10),
});
