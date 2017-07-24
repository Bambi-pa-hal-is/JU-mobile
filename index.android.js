import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './App/Main';

export default class jumobile extends Component {
  render() {
    return (
     <Main/>
    );
  }
}


AppRegistry.registerComponent('jumobile', () => jumobile);
