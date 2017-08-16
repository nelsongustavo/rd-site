import { addUserToStorage } from './rdTracker';

it('Should add user to localStorage', () => {
  addUserToStorage();
  expect(localStorage.user).toBe(true);
});
