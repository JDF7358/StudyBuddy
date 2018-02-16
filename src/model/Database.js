import { AsyncStorage } from 'react-native';
/*
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD3t41icczPZC8x7UEJ9ighhdGdQ0SxLqI",
  authDomain: "studybuddy-gt.firebaseapp.com",
  databaseURL: "https://studybuddy-gt.firebaseio.com",
  projectID: "studybuddy-gt",
  storageBucket: "studybuddy-gt.appspot.com",
  messagingSenderId: "1037332241375"
};
firebase.initializeApp(config);
*/

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
    user = await AsyncStorage.getItem(email);
    user = await JSON.parse(user) || null;
    return user;
  }
  
  /**
   * This method updates the user's data according to their changes.
   */
  updateUserItem(key, data) {
    AsyncStorage.setItem(key, data);
  }
  
}

export const StudyBuddyDB = new Database();