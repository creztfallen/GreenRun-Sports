import { createUser, getAllUsers } from "../controllers/userController";

export const userRoutes = [{
    method: 'POST',
    path: '/users',
    handler: createUser,
  }, {
    method: 'GET',
    path: '/users',
    handler: getAllUsers,
  } ]