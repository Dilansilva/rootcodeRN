import { Image, StyleSheet,TextInput ,Text, View,TouchableOpacity,Modal,Pressable } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useEffect, useState } from 'react';

const Home = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{backgroundColor: '#111111'}}>
            <View style={{marginLeft:20,flexDirection:'row'}}>
               <View>
                    <Text style={{fontSize:35,fontWeight:'bold',color:'white'}}>Good Afternoon</Text>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Recently Played</Text>
               </View>
               <View style={{marginLeft:70,marginTop:10}}> 
                    <Avatar
                        size={60}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                        onPress={() => setModalVisible(true)}
                    />
               </View>
               <View>
                
               </View>
            </View>
            <View style={{ justifyContent: "center",alignItems: "center",}}> 
                        <Image
                            source={require('../assets/practical_test_logo.png')}
                            style={{width:200,height:200}}
                        />
                   </View>


            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Logging Out</Text>
                                <Text style={{marginBottom:10}}>Are you sure want to log out?</Text>
                                    <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => navigation.navigate('Login')}
                                    >
                                    <Text style={styles.textStyle}>Log Out</Text>
                                    </Pressable>
                            
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default Home;