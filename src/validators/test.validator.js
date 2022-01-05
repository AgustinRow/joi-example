import * as Joi from 'joi';

const testSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
});

export default testSchema;
