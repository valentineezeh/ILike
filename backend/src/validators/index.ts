import { validateAll } from 'indicative/validator';
import { Response, Request, NextFunction } from 'express';

// function that validate user input on creation of movies
const ValidateInput = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await validateAll(req.body, {
      title: 'required|string',
      image: 'required|string',
      description: 'required|string'
    })
    return next()
  } catch (error) {
    return res.status(422).json(error)
  }
}

export default ValidateInput;