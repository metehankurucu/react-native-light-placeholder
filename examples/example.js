
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
} from 'react-native';

import UserPlaceholder from './UserPlaceholder';

const App = () => {
    const  [visible,setVisible] = React.useState(true);
    const  [users,setUsers] = React.useState([]);

    const fetchUsers = () => {
        fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.data);
            setVisible(false)
        });
    }

    React.useEffect(() => {
        //for example 2 seconds delay
        setTimeout(fetchUsers,2000);
    })

    return (
        <SafeAreaView>
            <Text style={styles.title}>Full Example</Text>
            <UserPlaceholder number={5} visible={visible} />
            <FlatList
                //You can use it here too
                // ListEmptyComponent={() => <UserPlaceholder number={5} visible={visible} />}
                keyExtractor={(item,index)=> index.toString()}
                data={users}
                renderItem={({item,index}) => {
                    return <ListItem key={item.email} {...item} />
                }}
            />
            <Text style={{ textAlign:'center', marginTop:50 }}>User data fetched from https://reqres.in/api/users</Text>
        </SafeAreaView>
    );
};

const ListItem = ({ first_name, last_name, avatar, email }) => {
    return(
        <View key={email} style={styles.listItem}>
            <Image source={{uri:avatar}} style={styles.avatar}  />
            <View style={{flex:1,padding:5}}>
                <Text style={styles.name}>{first_name} {last_name}</Text>
                <Text style={{fontSize:20}}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    padding:10
  },
  name:{
    fontSize:22,
    padding:3
  },
  listItem:{
    flexDirection:'row',
    alignItems:'center',
    margin:10
  },
  avatar:{
      height:80, 
      width:80, 
      borderRadius:40
    }
});

export default App;
