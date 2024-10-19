import { useEffect } from "react";
import {View, Text} from "react-native";
import SplashScreen from "react-native-splash-screen";


const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000);
    }, []);

    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!</Text>
    </View>
}

export default App;
