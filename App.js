<<<<<<< HEAD
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { styles } from './src/styles/style';
import Movies from './src/components/Movies';
=======
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Users from './src/components/Users';
import { Counter } from './src/components/Counter';
import { styles } from './src/styles/style';
>>>>>>> a2ef67b7147b9748151449b836c2a746abb14716

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
<<<<<<< HEAD
        <Movies/>
=======
        <Counter/>
        <Users/>
>>>>>>> a2ef67b7147b9748151449b836c2a746abb14716
      </SafeAreaView>
    </Provider>
  );
}

