import { View, Text } from "react-native"
import { Link } from "expo-router";

export default function Account(){
    return(
        <View>
            <Text> Account Page</Text>
            <Link href={"/(nobottombar)/accountinfo"}>
                <Text> Go to account info</Text>
            </Link>
        </View>
    );
}