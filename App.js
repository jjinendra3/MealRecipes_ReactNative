import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,View } from 'react-native';
import Categories from './screens/Categories';
export default function App() {
  return (
    <View style={{flex:1,marginTop:20}}> 
    <SafeAreaView>
      <StatusBar style="auto" />
      <Categories/>
    </SafeAreaView>
    </View>
  );
}
