import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class List extends Component {
  render() {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>List!</Text>
            </View>
        </ScrollView>
    );
  }
}