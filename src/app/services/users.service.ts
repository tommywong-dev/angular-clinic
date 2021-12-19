import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users: User[] = [];

  constructor() {}

  get users() {
    return this._users;
  }

  register(newUser: User) {
    if (this._users.findIndex((user) => user.id === newUser.id) !== -1) {
      throw new Error('User with similar ID has already exist!');
    }
    this._users.push(newUser);
  }

  login(id: string, password: string) {
    const userIndex = this._users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User does not exist!');
    }
    if (!this._users[userIndex].login(password)) {
      throw new Error('Password does not match!');
    }
    return this._users[userIndex];
  }
}
