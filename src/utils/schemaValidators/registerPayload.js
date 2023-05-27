import Joi from "joi";

//schemas
export const registerWithEmailAndPasswordPayloadSchema = Joi.object({
  name:Joi.string().required(),  
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const registerWithEmailAndPasswordValidator = async (payload) => {
  await registerWithEmailAndPasswordPayloadSchema.validateAsync(payload);
};
