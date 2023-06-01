import Joi from "joi";

//schemas
export const profilePayload = Joi.object({
  username: Joi.string().required(),
  bio: Joi.string().optional(),
});

export const profilePayloadValidator = async (payload) => {
  await profilePayload.validateAsync(payload);
};