import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../reducers/counterReducer';
import { styles } from '../styles/style';

export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decrement())}
      >
         <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}
      >
         <Text style={styles.buttonText}>+</Text>
        
      </TouchableOpacity>
    </View>
  );
};


