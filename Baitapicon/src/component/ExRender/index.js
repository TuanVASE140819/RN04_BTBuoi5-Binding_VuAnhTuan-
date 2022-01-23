import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from './Icon';
import {angry, care, haha, like, love, sad} from './images';

export default class ExRender extends Component {
  array = [angry, care, haha, like, love, sad];
  state = {
    selectedEmoji: care,
  };

  onPressIcon = selectedEmoji => this.setState({selectedEmoji});

  renderEmoji = () => {
    return this.array.map((icon, index) => (
      <Icon
        selectedEmoji={icon === this.state.selectedEmoji}
        key={index}
        iconSource={icon}
        onPress={() => this.onPressIcon(icon)}
      />
    ));
  };

  render() {
    const {selectedEmoji} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Bạn đang cảm thấy như thế nào ?</Text>
        <View style={styles.boxShadow}>
           <Image style={styles.selectedEmoji} source={selectedEmoji} />
        </View>      
        <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
  selectedEmoji: {
    height: 150,
    width: 150,
    marginVertical: 20,
    
  },
  emojiContainer: {
    flexDirection: 'row', 
  },
  boxShadow: {
    padding: 1,
    borderRadius: 100,
    width: 200,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#fffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    width: 165,
    marginVertical: 20,
    borderColor: 'gray',
  }
});
// const shadow = {
//   shadowColor: '#30C1DD',
//   shadowRadius: 10,
//   shadowOpacity: 0.6,
//   elevation: 8,

//   shadowOffset: {
//     width: 0,
//     height: 4
//   }
// }