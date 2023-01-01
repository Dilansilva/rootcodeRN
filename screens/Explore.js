import { useEffect, useState } from 'react';
import { SafeAreaView,ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import CardD from '../components/Card';

const Explore = ({ navigation }) => {
    const[data,setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search,setSearch] = useState('all');
    useEffect(() => {
        getMovies()
    },[search]);

    const getMovies = async () => {
        try {
         const response = await fetch('https://itunes.apple.com/search?term='+search);
         const json = await response.json();
         setData(json.results);
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

    return (
        <SafeAreaView style={{backgroundColor:'#111111',flex:1,marginTop:'15%'}}>
                <TextInput 
                    style={{marginTop:'5%',color: '#FBBC05'}} 
                    label="Label" 
                    variant="standard"
                    onChange={setSearch} 
                />
                <ScrollView>
                    {
                       isLoading ? <ActivityIndicator/> : data.map(data => (
                           <TouchableOpacity onPress={() => navigation.navigate({
                                                                name :'Details',
                                                                params: {
                                                                    artistName : data.artistName,
                                                                    collectionName : data.collectionName,
                                                                    trackName : data.trackName,
                                                                    artworkUrl100 : data.artworkUrl100,
                                                                    trackPrice : data.trackPrice,
                                                                    releaseDate : data.releaseDate
                                                                },
                                                                merge: true})}>
                                <CardD
                                    key={data.trackId}
                                    image={data.artworkUrl100}
                                    trackName={data.trackName}
                                    artistName={data.artistName}
                                    collectionName={data.collectionName}
                                />
                           </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                
        </SafeAreaView>
    );
}

export default Explore;