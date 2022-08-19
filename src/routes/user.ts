import {
  createUser,
  getAllUsers,
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
