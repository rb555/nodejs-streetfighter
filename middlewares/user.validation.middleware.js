import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { body } = req;
  const requiredFields = Object.keys(USER).filter(field => field !== 'id' && field !== 'firstname');
  const missingFields = requiredFields.filter(field => !body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ error: `Missing Fields: ${missingFields.join(', ')}` });
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
      return false;
    }
    const existingUser = db.get('users').find({ email }).value();
    if (existingUser) {
      return false; 
    }
    return true; 
  }

  if (!isValidPhoneNumber(body.phoneNumber)) {
    return res.status(400).json({ error: 'Wrong phone number' });
  }
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { body } = req;

  const modelFields = Object.keys(USER).filter(field => field !== 'id' && field !== 'firstname');
  const updatedFields = modelFields.filter(field => body[field]);

  if (updatedFields.length === 0) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  if (body.email && !isValidEmail(body.email)) {
    return res.status(400).json({ error: 'Email format not valid' });
  }

  if (body.phoneNumber && !isValidPhoneNumber(body.phoneNumber)) {
    return res.status(400).json({ error: 'Phone number not valid' });
  }

  if (body.password && !isValidPassword(body.password)) {
    return res.status(400).json({ error: 'Password not valid' });
  }
  next();
};

export { createUserValid, updateUserValid };
