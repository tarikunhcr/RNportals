/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {register} from '@ionic/portals-react-native';
import {addPortal} from '@ionic/portals-react-native';

register(
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlY2Y0YjRjOC03NGYyLTQ2NzQtODNlNC0yOTE3MTA4NWU4NTAiLCJqdGkiOiI4TjdJT2Q4bHdYSEd0ZkEzN081eFI4eXc4dTdJR0ZrSEZTeFVQNVVkdlNVIn0.tii3Fa16QV3t8gESgx51D6h9k_DSzVltmtPbhcCOSScadb0X4yWA8yiAU7YttjDjrg1BBf2xnjNieMMaH4iYMfEGnUjAVh9zz8YhqpoWUrv-GudJJefa_BC2oe58nVyKP74TirTbA9Bj24zY47hBc26PNkhF7Rx4dFsE-7AV99lZ4kbYeF4Qz0BG2frVcBJFRvIzuHjnCpUPF7LRSWW2kWSMDmtkI0K-6VjQanUOBKDX4Vn3qbX16-9zzjMv4GIguirg-67p2IJXkuRCsH5DCxirIldLDl_pTdenGTE1ozb5IA3Ibo1ry4ZsBUDNR5w4oGVRV1jM8KCiohj7kxXh9g',
);
const helloPortal = {
  // A unique name to reference later
  name: 'shopwebapp',

  // This is the location of your web bundle relative to the asset directory in Android and Bundle.main in iOS
  // This will default to the name of the portal
  startDir: 'portals/shopwebapp',
  // Any initial state to be provided to a Portal if needed
  initialContext: {
    greeting: 'Hello, world!',
  },
};

addPortal(helloPortal);
AppRegistry.registerComponent(appName, () => App);
