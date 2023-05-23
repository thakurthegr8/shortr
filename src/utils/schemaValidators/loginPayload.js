import Joi from "joi";

//schemas
export const loginWithEmailAndPasswordPayloadSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginWithEmailAndPasswordPayloadValidator = async (handler) => {
  return async (payload) => {
    try {
      await loginWithEmailAndPasswordPayloadSchema(payload);
      return handler(payload);
    } catch (error) {
      throw new Error(error);
    }
  };
};
