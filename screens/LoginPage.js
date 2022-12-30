import { Image, StyleSheet,TextInput ,Text, View,TouchableOpacity ,AsyncStorage} from 'react-native';
import { SocialIcon } from '@rneui/themed';
import {useState } from 'react';

const LoginPage = ({navigation}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState();
    const [errorMsg,setErrorMsg] = useState();
    const [errPass,setErrPass] = useState();
    const [isLogging,setIsLogging] = useState(true);

    /*Toggle password input */
    const [toggle,setToggle] = useState(true);
    
    let emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    const submitCredentials = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(password,email);
        var raw = JSON.stringify({
            email: email,
            password: password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://stage-api.serw.io/v1/auth/local/login", requestOptions)
          .then(response => response.text())
          .then(result => {
                let authorized = true;
              if(JSON.parse(result).isVerified){
                  navigation.replace('HomeScreen')
                    const storeData = async () => {
                    try {
                      await AsyncStorage.setItem(
                        'token',
                        JSON.parse(result).customerAccessToken
                      );
                    } catch (error) {
                      // Error saving data
                    }
                  };
                  storeData();
              } else {
                  authorized = false
              }
              setIsLogging(authorized);
          })
          .catch(error => console.log('error:::', error));
    }

    const emailValidator = () => {
        let errMsg = "";
        emailRegex.test(email) ? errMsg = "" : errMsg = "Invalid Email" 
        setErrorMsg(errMsg);
    }
    
    return(
        <View style={{flex:1,marginTop:'13%',backgroundColor: '#111111'}}>
           <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/practical_test_logo.png')}
            />
           </View>
            <View>
                    <Text style={styles.textStyles}>Username</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="kate@gmail.com"
                            placeholderTextColor="#FFFFFF" 
                            onChangeText={setEmail}
                            onBlur={emailValidator}
                        />
                    </View>
                    <Text style={{color:'red',marginLeft:43}}>{errorMsg}</Text>
            </View>
            <Text style={styles.textStyles}>Password</Text>
                <View style={{flexDirection:'row'}}>
                        {/* <Text style={styles.textStyles}>Password</Text> */}
                        {/* <View style={styles.inputContainer}> */}
                            <TextInput
                                style={{
                                    height: 40,
                                    margin: 12,
                                    width: '80%',
                                    borderWidth: 1,
                                    padding: 10,
                                    color: '#9CA3AF',
                                    backgroundColor: '#3A3C3F',
                                    marginLeft: 40
                                }}
                                placeholder="........."
                                placeholderTextColor="#FFF" 
                                onChangeText={setPassword}
                                secureTextEntry={toggle}
                               // onBlur={passwordValidator}
                            />
                        {/* </View> */}
                        <TouchableOpacity style={{marginTop:20,marginLeft:-60}}
                        onPress={() => setToggle(!toggle)}>
                            <Text style={{color:'#fbbc05'}}>{toggle ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                        
                       
                </View>

           <View>
                <Text style={styles.whiteText} >Forget your Password?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={submitCredentials}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'red',marginLeft:43,textAlign:'center',marginTop:20}}>{!isLogging ? "Invalid Logging" : null}</Text>
           </View>
          
           <View style={styles.marginTopStyle}>
               <Text style={styles.whiteTextCenter}>or continue with</Text>
           </View>

           <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <SocialIcon
                    type="facebook"
                    iconType='font-awesome'
                />
                <SocialIcon
                    type="google"
                    iconType='font-awesome'
                />
           </View>

           <View>
                <Text style={{textAlign:'center',
                                color:'#FFFFFF',
                                fontWeight : 'bold',
                                marginTop: 15}}>
                    By Continung you agree to our Teams of Service privacy{"\n"} policy
                </Text>
           </View>

           <View style={{borderBottomColor: '#FFFFFF', 
                        borderBottomWidth: 1, 
                        marginRight: 40,
                        marginLeft: 40,
                        marginTop: 20}} />
            
            <View>
                <Text style={{textAlign:'center',
                                color:'#FFFFFF',
                                fontWeight : 'bold',
                                marginTop: 15}}>
                    Not have an account yet?<Text style={{color:'#fbbc05'}}>Join Us</Text>
                </Text>
           </View>
            </View>
    )
}

const styles =StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
      },
    image : {
        width : 200,
        height: 200
    },input: {
        height: 40,
        margin: 12,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        color: '#9CA3AF',
        backgroundColor: '#3A3C3F',
      },
    inputContainer : {
        justifyContent: 'center',
        alignItems: 'center'
    },  
    textStyles: {
        color: '#3A3C3F',
        marginLeft: 43,
        fontWeight: 'bold'
    },
    whiteText: {
        color: '#FFFFFF',
        fontWeight : 'bold',
        marginLeft: 43
    },
    whiteTextCenter:{
        color: '#FFFFFF',
        fontWeight : 'bold',
    },
    buttonContainer : {
        width: '80%',
        justifyContent: 'center',
        marginLeft: 43,
        marginTop: 30
    },
    button: {
        backgroundColor: "#fbbc05",
        padding: 13,
        borderRadius: 22,
        textAlign:'center'
    },
    buttonText: {
        color: "white",
        textAlign:'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    marginTopStyle: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginPage;