import Joi from "joi";

//schemas
export const loginWithEmailAndPasswordPayloadSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const loginWithEmailAndPasswordPayloadValidator = async (payload) => {
  await loginWithEmailAndPasswordPayloadSchema.validateAsync(payload);
};
