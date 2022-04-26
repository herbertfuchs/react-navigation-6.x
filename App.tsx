import { StatusBar } from 'react-native';
import Routes from './src/routes/Stacks/MainStack';

export default function App() {
  return (
  <>
    <StatusBar 
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </>
  );
}

