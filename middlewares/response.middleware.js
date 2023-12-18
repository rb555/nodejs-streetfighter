import { dbAdapter } from "../config/db.js";

const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  const result = dbAdapter.get('result').value();

  res.json(result);
  next();
};

export { responseMiddleware };
