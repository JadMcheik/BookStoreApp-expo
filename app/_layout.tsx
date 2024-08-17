import { Stack } from "expo-router";
import { Colors } from "../themes/Colors";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: Colors.mainBlue,
          },
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        options={{
         
        }}
      />
      <Stack.Screen name="SignUpScreen" />
      <Stack.Screen name="ForgotPasswordScreen" />
    </Stack>
  );
};

export default Layout;
