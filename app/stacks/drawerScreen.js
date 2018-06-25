import {DrawerNavigator, Image} from 'react-navigation';

import Screen1 from '../components/screen1';
import Screen2 from '../components/screen2';
import Screen3 from '../components/screen3';
import Screen4 from '../components/screen4';

const DrawerScreen = DrawerNavigator({
    Servicios: {screen: Screen1},
    Contacto: {screen: Screen2},
    Nosotros: {screen: Screen3},
    Cards: {screen: Screen4}
}, {
    headerMode: 'none',  
    drawerBackgroundColor: 'rgb(41, 43, 44)',
    contentOptions: {
  		activeTintColor: 'rgb(252, 220, 122)',
  		inactiveTintColor: 'white',
    }, 
})

export default DrawerScreen;