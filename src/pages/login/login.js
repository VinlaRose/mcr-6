// import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
//   withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

export const LoginApp = (signOut) =>{
  return (
    <View className="App">
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    
  );
}

