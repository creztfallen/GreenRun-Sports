import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  updateUserState,
} from '../controllers/userController';

export const userRoutes = [
  {
    method: 'POST',
    path: '/users',
    handler: createUser,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUsers,
  },
  {
    method: 'GET',
    path: '/users/{userId}',
    handler: getOneUser,
  },
  {
    method: 'PUT',
    path: '/users/{userId}',
    handler: updateUser,
  },
  {
    method: 'Patch',
    path: '/users/{userId}',
    handler: updateUserState,
  },
];
