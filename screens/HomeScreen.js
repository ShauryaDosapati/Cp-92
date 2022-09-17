import React, {Component}from "react";
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, SafeAreaView, Touchable} from "react-native"
//homescreen ----> wetherScreen

//HomeScreen  ------> AboutmeScreen

export default class HomeScreen extends React.Component{
   constructor(props){
    super(props);
    this.state={

    }
   }

   render(){
    return(
        <SafeAreaView style={styles.containers}>

            <View style={styles.container}>
                <Text style={styles.headingText}>    Weather App    </Text>
                
                <TouchableOpacity 
                onPress={()=>{

                    this.props.navigation.navigate("WeatherScreen")
                }}
                style={styles.weather_btn}>

<Image source={require("../assets/weatherDroplet.png")}
style={styles.whitedropimg}
/>

                </TouchableOpacity>


      <TouchableOpacity 
      onPress={()=>{
        this.props.navigation.navigate("AboutScreen")
      }}  
      style={styles.about_btn} >
        <Text style={styles.about_btn_text}>      About Me     </Text>
        </TouchableOpacity>       
            </View>
        </SafeAreaView>
    );
   }
}



const styles StyleSheet create Dev just a min my chrome was not responding