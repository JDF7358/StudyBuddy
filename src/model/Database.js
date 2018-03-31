import { AsyncStorage } from 'react-native';

class Database {

  /**
   * This method adds a new user to the database.
   */
  addUser(user) {
    console.log(user);
    AsyncStorage.setItem(user.email, JSON.stringify(user));
    console.log(user);
  }

  /**
   * Returns the user associated with the given email address.
   * Returns null if no user or multiple users were found.
   */
  async getUser(email) {
    var user = await AsyncStorage.getItem(email);
    user = await JSON.parse(user) || null;
    return user;
  }

  /**
   * This method updates the user's data according to their changes.
   */
  updateUser(email, newUser) {
    AsyncStorage.setItem(email, JSON.stringify(newUser));
  }
  
}

export const StudyBuddyDB = new Database();