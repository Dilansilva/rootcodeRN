import { Image, StyleSheet, Text, View } from 'react-native';

const LoginPage = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/practical_test_logo.png')}
            />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#111111'
      },
    image : {
        width : 200,
        height: 200
    }
});

export default LoginPage;