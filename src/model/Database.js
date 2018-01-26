import { SQLite } from 'expo';

class Database {
  static users_table = 'users';
	constructor(name) {
		this.db = SQLite.openDatabase(name);
    // TEMPORARY: drop users table before creating.
    this.db.transaction(tx => {
      tx.executeSql('drop table ?', [this.users_table]);
    });
    this.db.transaction(tx => {
      tx.executeSql('create table if not exists ? (id integer primary key not null, '
        + 'firstName text, lastName text, password text, username text, major text, year text);', [this.users_table]);
    });
  }

  /**
   * This method adds a new user to the database.
   */
  addUser(lastName, firstName, email, year, major, password) {
    this.db.transaction(tx => {
      tx.executeSql('insert into ? (firstName, lastName, password, username, major, year) VALUES (?, ?, ?, ?, ?, ?)',
        [this.users_table, firstName, lastName, password, email, major, year]);
    });
  }

}

export const StudyBuddyDB = new Database('studybuddy.db');