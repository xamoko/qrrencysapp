/*import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Screen2 extends Component {
    render() {
        return (
            <View>
                <Text>Screen 2</Text>
            </View>
        );
    }
}

export default Screen2;*/

import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}