/*import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Screen1 extends Component {
    render() {
        return (
            <View>
                <Text>Screen 1</Text>
            </View>
        );
    }
}

export default Screen1;*/

import React, { Component } from 'react';
import { StyleSheet, Image, View, WebView, Platform, Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Screen1 extends Component<{}> {
  render() {
  	let trade = "new TradingView.widget({'autosize': true,'symbol': 'FX_IDC:USDMXN','interval': 'D','timezone': 'America/El_Salvador','theme': 'Black','style': '1','locale': 'es','toolbar_bg': 'rgba(242, 242, 242, 1)','enable_publishing': false,'allow_symbol_change': true,'save_image': false,'hideideas': true});";
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://qrrencys.com/img/icon.png'}} />
                <Body>
                  <Text> Qrrencys</Text>
                  <Text> Forex & Stocks</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <WebView
				    style={{flex:1},{ height: 300 }}
				    javaScriptEnabled={true}
				    source={{uri: 'https://www.youtube.com/embed/wftm_kAckY0?rel=0'}}
				/>
				
            </CardItem>
            	<Text style={{textAlign: 'left'}}>
            		{"\n"}
					Tipos de Instrumentos
					{"\n"}
				</Text >
				
				<Text style={{textAlign: 'center'}}>
					{"\n"}
					Tipos de Graficos
					{"\n"}
				</Text>

				<Text style={{textAlign: 'right'}}>
					{"\n"}
					Velas Japonesas
					{"\n"}
				</Text>
          </Card>

          <Card>
            
            <CardItem cardBody>
              <WebView
				    style={{flex:1},{ height: 300 }}
				    javaScriptEnabled={true}
				    source = {{uri: 'https://s.tradingview.com/widgetembed/'}}
				    
				/>
				
            </CardItem>
				<Text style={{textAlign: 'center'}}>
					{"\n"}
					Administración de portafolios para una mejor inversión.
					{"\n"}
				</Text>

			    <WebView
			    	style={{flex:1},{ height: 300 }}
				    javaScriptEnabled={true}
			        source={{ html: "<p style='text-align: justify;''>Percibe un incremento en los rendimientos de tus inversiones, con el apoyo de nuestros servicios. Si lo que quieres es aspirar a mejorar tu capacidad de análisis del mercado bursátil, administra tu portafolio aprovechando nuestras habilidades para invertir en diferentes tipos de mercados.</p>" }}
			    />
          </Card>

          <Card>
            
            <CardItem cardBody>
              <WebView
				    style={{flex:1},{ height: 300 }}
				    javaScriptEnabled={true}
				    source={{uri: 'http://qrrencys.com/img/trackrecord.jpg'}}
				/>
				
            </CardItem>
				<Text style={{textAlign: 'center'}}>
					{"\n"}
					Trackrecord.
					{"\n"}
				</Text>

			    <WebView
			    	style={{flex:1},{ height: 300 }}
				    javaScriptEnabled={true}
			        source={{ html: "<p style='text-align: justify;''>Verifica como se ha desenvuelto nuestro progreso gestionando sistemas financieros. Las técnicas que hemos desarrollado son altamente productivas disminuyendo el riesgo de inversión.s.</p>" }}
			    />
          </Card>
        </Content>
      </Container>

       
    );
  }
}
