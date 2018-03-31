import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component {
	
  static navigationOptions = {
<<<<<<< HEAD
    title: 'Kelly Chen',
=======
    title: 'Chat',
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
  };
  
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
<<<<<<< HEAD
          text: 'Hey. Where do you want to meet up and study?',
=======
          text: 'Hello developer',
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}