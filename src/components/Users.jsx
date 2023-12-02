import React, { useEffect } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../reducers/authReducer';
import { styles } from '../styles/style';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const errorMessage = useSelector((state) => state.users.errorMessage);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {errorMessage}</Text>;
  const getUsers = () => {
    dispatch(fetchUsers());
  };
  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={getUsers}
          title='GET USERS'
        >
        </Button>
        {users?.map((user) => (
          <View key={user.id}>
            <Text style={styles.text} >{user.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};



export default Users