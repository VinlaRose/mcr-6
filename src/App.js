
import {Home} from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import {LoginApp} from "./pages/login/login";
import {Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>} />;
      <Route path="/cart" element = {<Cart/>} />;
      <Route path="/login" element = {<LoginApp/>} />;
    </Routes>

    
  );
}

export default App;
// import logo from "./logo.svg";
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
// } from "@aws-amplify/ui-react";

// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>We now have Auth!</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }

// export default withAuthenticator(App);