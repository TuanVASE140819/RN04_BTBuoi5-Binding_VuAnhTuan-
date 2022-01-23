import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const Icon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.emojiContainer,
        props.selectedEmoji && styles.selectedIcon,
      ]}>
      <Image style={[styles.emoji]} source={props.iconSource} />
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  emoji: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  emojiContainer: {padding: 0.4, borderRadius: 50},
  selectedIcon: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});
