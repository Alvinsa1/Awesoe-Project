import react from 'react';
import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';

const contactme ='https://instagram.com/alvnrkn_?igshid=MzRlODBiNWFlZA==';


const App = () => {
  
  return(
    <View style={{backgroundColor:'#FFFDD0', padding:'auto', alignItems:'center'}}>
        <Image 
        style={{width:250, height:200, borderRadius:20, margin:20}} 
        source={require('./assets/Alvin.jpeg')}/>
        <Text style={{fontWeight:'bold', fontSize:'1000',textAlign:'center', color:'black'}}>Alvinsa Hafizh Arkaan</Text>
        <Text style={{fontWeight:'bold', textAlign:'center', color:'gray',padding:20}}> Haiya Oe Alvinsa Hafizh Arkaan seorang siswa SMK TELKOM Purwokerto dan passion saya bergerak dibidang UL/UX Design</Text>
        <Button title="Kunjungi Instagram" color='' onPress={() => Linking .openURL(contactme)}/>

        <Text style={{padding:20,fontWeight:'bold', fontSize:'500',textAlign:'center', color:'black'}}>My Recent Project</Text>
        <Image style={{width:300, height:200, borderRadius:10}} source={require('./assets/FigmaApk.png')}/>
        <Text style={{fontWeight:'Bold', fontSize:'500',textAlign:'left', color:'black'}}>Figma Design</Text>  
        <Text style={{fontWeight:'medium', fontSize:'500',textAlign:'left', color:'gray'}}>Web Design</Text>  
        <Image style={{width:300, height:200, borderRadius:10}} source={require('./assets/design.png')}/>
        <Text style={{fontWeight:'Bold', fontSize:'500',textAlign:'left', color:'black'}}>Desain gatau</Text>
        <Text style={{fontWeight:'medium', fontSize:'500',textAlign:'left', color:'gray'}}>Web Design</Text>  
    </View>
   
  )
}

export default App;