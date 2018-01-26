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
exp start
```

Once this has been run, scan the resulting QR code from the Expo Client application.
When you update App.js, the application will automatically update on your phone.

### Building for iOS / Android
#### iOS
```bash
git pull https://github.com/JDF7358/StudyBuddy.git
cd StudyBuddy
exp bi
```
#### Android
```bash
git pull https://github.com/JDF7358/StudyBuddy.git
cd StudyBuddy
exp ba
```
