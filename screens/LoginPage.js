import { Image, StyleSheet,TextInput ,Text, View,TouchableOpacity } from 'react-native';
import { SocialIcon, SocialIconProps } from '@rneui/themed';

const LoginPage = () => {
    return(
        <View>
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
                            value={"kate@gmail.com"}
                            placeholderTextColor="#FFFFFF" 
                        />
                    </View>
            </View>

                <View>
                        <Text style={styles.textStyles}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={"kate@gmail.com"}
                                placeholderTextColor="#FFF" 
                            />
                        </View>
                </View>

           <View>
                <Text style={styles.whiteText} >Forget your Password?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: '#3A3C3F'
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
        borderRadius: 22
    },
    buttonText: {
        color: "white",
    },
    marginTopStyle: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginPage;