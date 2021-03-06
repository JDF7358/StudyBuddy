import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({

  tb: { // EditProfileScreen
    fontSize: 30,
    padding: '2%',
    color: 'white'
  },
  EPcontainer: {
    flex: 1,
    padding: '5%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  EPPPwrap: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 16,
  },
  EPPP: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 200,
    borderColor: '#fff',
    borderWidth: 2,
  },


  HScontainer: { // HomeScreen
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  SBtitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  HSheader: {
    fontSize: 20,
  },


  LIcontainer: { // LoggedIn
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '5%',
    zIndex: 1,
  },


  LScontainer: { // LoginScreen
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: '5%',
  },
  LSheader: {
    fontSize: 20,
    padding: 15,
  },


  PScontainer: { // ProfileScreen
    flex: 1,
    backgroundColor: '#000',
  },


  RScontainer: { // RegisterScreen
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: '5%',
  },


  PCcontainer: { // ProfileCmp
    flex: 1,
    backgroundColor: '#000',
  },
  bgImgPos: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  Mcontainer: { //MatchesCmp
    flex: 1,
    height: 70,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'powderblue',
  },
  profileBG: {
    flex: 1,
    resizeMode: 'cover',
  },
  PCheader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  major_year: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
  },
  bio: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cic: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
  },
  SHcontainer: { //section header component
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
  },
  SHtext: { //section header component
    fontSize: 13,
  },
  Hcontainer: { //Header component
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  Hinput: { //Header component
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  Rcontainer: { //Row component
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CDDBFC',
  },
  Rtext: { //Row component
    marginLeft: 12,
    fontSize: 16,
  },
  Rphoto: { //Row component
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  Budiesbutton: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  Matchescontainer: { //Row component
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECB3',
  },

});