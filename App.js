import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Users from './src/components/Users';
import { Counter } from './src/components/Counter';
import { styles } from './src/styles/style';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Counter/>
        <Users/>
      </SafeAreaView>
    </Provider>
  );
}

