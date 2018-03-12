import { StudyBuddyDB } from './Database.js';
import t from 'tcomb-form-native';

export const Majors = t.enums({
  CS: 'Computer Science',
  CM: 'Computational Media',
  O: 'Other',
});

export const Years = t.enums({
  0: 'Freshman',
  1: 'Sophomore',
  2: 'Junior',
  3: 'Senior',
  4: '5th Year+',
});

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
});


export const User = t.struct({
  email: Email,
  name: t.String,
  lastName: t.String,
  password: t.String,
  passwordAgain: t.String,
  major: Majors,
  year: Years,
  bio: t.maybe(t.String)
});

class Auth {
  /**
   * Wrapper for the DB getUser class.
   */
  async getUser(email) {
    let user = await StudyBuddyDB.getUser(email);
    return user;
  }

  /**
   * Takes in a user object and creates a new account for that user.
   */
  createAccount(user) {
    StudyBuddyDB.addUser(user);
  }

  /**
   * Takes in an old item from the user and the new data to update the user's data to the new data.
   */
  updateUser(email, newUser) {
    StudyBuddyDB.updateUser(email, newUser);
  }
  
}

export const AuthObject = new Auth();
