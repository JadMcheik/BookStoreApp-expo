import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import PageForm from "../Shared/PageForm";
import { Colors } from "../../themes/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import RadioButtonRN from "radio-buttons-react-native";
import facebookLogo from "../../Images/iconmonstr-facebook-1.png";
import twitterLogo from "../../Images/iconmonstr-twitter-1.png";
import { useEffect, useState } from "react";
const SignInScreen = () => {
  const [selected, setSelected] = useState(false);
  const [correctLoginElements, setCorrectLoginElements] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");

  const Accounts = [
    {
      Email: "joseph",
      Password: "helloworld",
    },
    {
      Email: "jad",
      Password: "naruto",
    },
    {
      Email: "marwan",
      Password: "MonkeyDLuffy",
    },
  ];

  useEffect(() => {
    if (
      Accounts.find(
        (person) =>
          person.Email == emailInputValue.trim() &&
          person.Password == passwordInputValue.trim()
      )
      //Remark:this search is case sensitive
    ) {
      setCorrectLoginElements(true);
    } else {
      setCorrectLoginElements(false);
    }
  }, [passwordInputValue, emailInputValue]);

  return (
    <View style={styles.signInScreen}>
      <StatusBar barStyle="dark-content" />
      <View>
        <PageForm
          title="Sign In"
          ButtonContent="Sign In & Continue"
          buttonBackgroundColor={
            correctLoginElements ? Colors.mainBlue : Colors.lightBlue
          }
          buttonTextColor={
            correctLoginElements ? Colors.CustomWhite : Colors.mainBlue
          }
        >
          <View style={styles.inputsView}>
            <TextInput
              inputMode="email"
              placeholder="Email"
              style={styles.inputField}
              value={emailInputValue}
              onChangeText={setEmailInputValue}
            />
            <TextInput
              inputMode="password"
              secureTextEntry={true}
              placeholder="Password"
              style={styles.inputField}
              onChangeText={setPasswordInputValue}
              value={passwordInputValue}
            />
          </View>
          <View style={styles.radioAndForgotPassView}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                setSelected(!selected);
              }}
            >
              <Icon
                name={selected ? "check-circle" : "circle-thin"}
                size={24}
                color={selected ? Colors.mainBlue : "#D1DDDF"}
              />
              <Text style={styles.text}>Remember me</Text>
            </TouchableOpacity>

            <Text style={styles.forgotYourPassword}>Forgot your Password?</Text>
          </View>
        </PageForm>

        <View style={styles.orAndLogosView}>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.logosView}>
            <View
              style={[styles.imageLogoView, { backgroundColor: "#4267B2" }]}
            >
              <Image source={facebookLogo} style={styles.imageLogo} />
            </View>
            <View
              style={[styles.imageLogoView, { backgroundColor: "#1C9DEB" }]}
            >
              <Image source={twitterLogo} style={styles.imageLogo} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          By signing in, creating an account, or checking out as a Guest, you
          are agreeing to our{" "}
          <Text style={{ color: "black" }}>Terms of Use</Text> and our{" "}
          <Text style={{ color: "black" }}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  signInScreen: {
    flex: 1,
    paddingTop: 108,
    paddingBottom: 54,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 20,
  },

  inputsView: {
    rowGap: 10,
  },
  inputField: {
    width: 335,
    height: 56,
    fontSize: 17,
    fontFamily: "circular",
    paddingLeft: 20,
    backgroundColor: Colors.inputBgColor,
    borderRadius: 218,
  },
  radioAndForgotPassView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "circular",
    color: Colors.lightGray,
    marginLeft: 6,
  },

  forgotYourPassword: {
    fontSize: 12,
    fontFamily: "circular",
    fontWeight: 300,
    color: Colors.lightGray,
  },
  orAndLogosView: {
    paddingTop: 20,
  },
  logosView: {
    flexDirection: "row",
    columnGap: 16,

    rowGap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    textAlign: "center",
    color: Colors.lightGray,
  },
  imageLogoView: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    color: Colors.lightGray,
    fontFamily: "circular",
    fontSize: 11,
    fontWeight: 300,
    textAlign: "center",
  },
});