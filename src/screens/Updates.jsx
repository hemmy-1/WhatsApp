import { Text, View,StyleSheet, } from "react-native";
import { SafeAreaProvider,SafeAreaView, } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';



export default function Updates() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10,}}>
            <View>
            <Text style={{fontSize:40,color:'white',}}>
                Updates
            </Text>
            </View>

            <View style={{flexDirection:'row', gap:20,}}>
             <EvilIcons name="search" size={24} color="white" />
             <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
        </View>

        <View style={{width:"95%",height:50,backgroundColor:"#0a332b",borderRadius:10,justifyContent:'center',alignItems:'center',margin:10,
            borderRadius:10,
        }}>
           
            <Text style={{color:'white', }}>
                Discover more with relevant ads only in Status &{'\n'}Channels.
            <Text style={{color:"green",}}>
                See details and updated terms
            </Text>
            </Text>   
        </View>

<Text style={{color:"white"}}>Status</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1014',
       paddingTop: 10,
        
    }
});
