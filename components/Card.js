import { View,Image,Text } from "react-native";

const CardD = (props) => {
    return (
        <View style={{flexDirection:'row',marginTop:'2%'}}>
            <View>
                <Image 
                    style={{width:80,height:80}}
                    source={{uri: props.image}}
                />
            </View>
            
            <View style={{marginLeft:'3%'}}>
                <Text style={{color:'#ffff',fontWeight:'bold',fontSize:15,marginTop:'1%'}}>{props.trackName}</Text>
                <Text style={{color:'#ffff',marginLeft:'80%'}}>{'\u2B24'}{'\u2B24'}{'\u2B24'}</Text>
                <Text style={{color:'#ffff',marginTop:'2%'}}>{props.artistName + '.'}{props.collectionName}</Text>
            </View>
           
        </View>
    ); 
}

export default CardD;

