# StudyBuddy
Contains client files for the StudyBuddy mobile application.
Using [Expo](https://expo.io) and [React Native](https://facebook.github.io/react-native/).
## Building
You will need the exp command line tool.
### Running for Debugging
You will need the Expo Client application for your phone to debug the application on a physical device.

```bash
git pull https://github.com/JDF7358/StudyBuddy.git
cd StudyBuddy
npm install
exp start
```

Once this has been run, scan the resulting QR code from the Expo Client application.
When you update App.js, the application will automatically update on your phone.

### Building for iOS / Android
#### iOS
```bash
git pull https://github.com/JDF7358/StudyBuddy.git
cd StudyBuddy
npm install
exp bi
```
#### Android
```bash
git pull https://github.com/JDF7358/StudyBuddy.git
cd StudyBuddy
npm install
exp ba
```

## Done-Done Criteria
Issues should only be moved from 'Done' to 'Closed' if they meet the following criteria:
- Tested: Members of the team have either written unit tests or produced a list of user tests that ensure the issue is functional for all scenarios of the issue.
- Coded: The feature has been fully coded for the scenarios listed. If some features are outside the scope of a story or rely on other, later sprints, their functionality and scenarios should be reorganized to reflect this, including the possibility of spinning off a new user story.
- Integrated: The feature works with the rest of the system through common interfaces. It should not require any special workarounds to function with the rest of the system. If interfaces need to be modified to provide additional functionality, they should also meet these same criteria.
- Builds/Installs: The application must build its JavaScript bundle before an issue is marked as 'Closed.' Since the app is a JavaScript bundle, it does not need to meet any kind of installation criteria. The fact that it builds is proof enough that it will install.
- Fixed/Recorded: If any issues arise as a result of the implementation of the story that cannot be fixed within the scope of a single issue, a new issue or user story should be created and added to the project backlog. This issue should be assigned a sprint where it will be feasible to implement the delayed features. This does not mean a story may be marked closed if it does not function; it must still meet all the other Done-Done criteria.
- Accepted: Team members and primary client contact agree that functionality works as described in their agreement. If disagreements arise, the point of contact for the team should negotiate with the client to reach a resolution before the issue is marked as closed.
