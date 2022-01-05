import createHttpError from 'http-errors';
import * as Joi from 'joi';
import * as Validators from '../validators';

//It works as a factory function
export default validator => {
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator does not exist`);

  return async function(req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi)
        return next(createHttpError(400, { message: err.message }));
      next(createHttpError(500));
    }
  };
};
