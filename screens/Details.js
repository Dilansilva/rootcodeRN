import { Button, Text, View } from 'react-native';


const Details = ({route,navigation}) => {
    const { artistName,
        collectionName,
        trackName,
        artworkUrl100,
        trackPrice,
        releaseDate} = route.params
    return(
        <View style={{backgroundColor:'#111111',flex:1,marginTop:'15%'}}>
            <Text style={{color:'#ffff'}}> {artistName}</Text>
            
            <Button
                title="Press me"
                onPress={() => navigation.navigate('Explore')}
            />
        </View>
    );
}

export default Details;