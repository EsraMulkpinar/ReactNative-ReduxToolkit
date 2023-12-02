import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { styles } from './src/styles/style';
import Movies from './src/components/Movies';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Movies/>
      </SafeAreaView>
    </Provider>
  );
}

