import { StudyBuddyDB } from './Database.js';
import t from 'tcomb-form-native';

const Majors = t.enums({
  CS: 'Computer Science',
  CM: 'Computational Media',
  O: 'Other',
});

const Years = t.enums({
  0: 'Freshman',
  1: 'Sophomore',
  2: 'Junior',
  3: 'Senior',
  4: '5th Year+',
});

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
});

class Auth {
  /**
   * Wrapper for the DB getUser class.
   */
  async getUser(email) {
    user = await StudyBuddyDB.getUser(email);
    return user;
  }

  /**
   * Takes in a user object and creates a new account for that user.
   */
  createAccount(user) {
    StudyBuddyDB.addUser(user);
  }
}

export const AuthObject = new Auth();