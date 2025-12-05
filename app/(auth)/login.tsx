import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// assets
import FacebookLogo from "../../assets/images/socials/facebook.png";
import GoogleLogo from "../../assets/images/socials/google.png";

// contexts
// auth
import { useAuthContext } from "@/contexts/AuthContext";

export default function Login() {
  // states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focus, setFocus] = useState<"" | "USERNAME" | "PASSWORD">("");
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [error, setError] = useState({
    flag: "",
    message: "",
  });
  // contexts
  const { users, user, setUser } = useAuthContext();

  // hooks
  const insets = useSafeAreaInsets();

  // effects
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  // handlers
  const loginHandler = () => {
    if (!username || !password) {
      setError((prev) => {
        return {
          ...prev,
          message: "Username and password required",
        };
      });
    } else {
      const isUserExist = users.find((user) => user.username === username);
      if (!isUserExist) {
        setError({
          flag: "username",
          message: "Account with this username not exist",
        });
      } else if (isUserExist.password !== password) {
        setError({ flag: "password", message: "Incorrect password" });
      } else {
        setError({ flag: "", message: "" });
        setUser(isUserExist);
        setUsername("");
        setPassword("");
        setError({ flag: "", message: "" });
        Keyboard.dismiss();
      }
    }
  };
  return (
    <View
      className="flex-1 bg-white flex-col flex  items-center justify-center px-3"
      style={{ padding: insets.top }}
    >
      <Text className="text-xl font-medium text-neutral-500">Sign In</Text>
      <Text
        className={`text-sm text-center mt-5 transition-colors ease-in-out duration-300 ${error.message ? "text-red-600" : "text-neutral-400"}`}
      >
        {error.message || "Enter a valid username & password to continue"}
      </Text>
      {/* form */}
      <View className="w-full px-5">
        {/* username */}
        <View
          className={`mt-5 flex w-full transition-colors ease-in-out duration-300 flex-row items-center border  rounded-xl px-3 py-0.5  gap-1.5 ${error.flag === "username" ? "border-red-600" : focus === "USERNAME" || username ? "border-green-600" : "border-neutral-300"}`}
        >
          <Ionicons
            name="person"
            size={16}
            color={
              error.flag === "username"
                ? "#dc2626"
                : focus === "USERNAME" || username
                  ? "#16a34a"
                  : "#b5b5b5"
            }
          />
          <TextInput
            value={username}
            onChangeText={setUsername}
            onFocus={() => {
              setFocus("USERNAME");
            }}
            onBlur={() => {
              setFocus("");
            }}
            placeholder="Username"
            className="text-sm flex-1 w-full text-neutral-600 px-2 focus:ring-0 focus:outline-none border-none bg-transparent"
          />
        </View>
        {/* password */}
        <View
          className={`mt-7 flex w-full transition-colors ease-in-out duration-300 flex-row items-center border  rounded-xl px-3 py-0.5  gap-1.5 ${error.flag === "password" ? "border-red-600" : focus === "PASSWORD" || password ? "border-green-600" : "border-neutral-300"}`}
        >
          <Ionicons
            name="lock-closed"
            size={16}
            color={
              error.flag === "password"
                ? "#dc2626"
                : focus === "PASSWORD" || password
                  ? "#16a34a"
                  : "#b5b5b5"
            }
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            onFocus={() => {
              setFocus("PASSWORD");
            }}
            onBlur={() => {
              setFocus("");
            }}
            secureTextEntry={!isPasswordShow}
            placeholder="Password"
            className="text-sm flex-1 w-full text-neutral-600 px-2 focus:ring-0 focus:outline-none border-none bg-transparent"
          />
          <Pressable
            onPress={() => {
              setIsPasswordShow(!isPasswordShow);
            }}
          >
            <Ionicons
              name={isPasswordShow ? "eye" : "eye-off"}
              size={20}
              color={"#b5b5b5"}
            />
          </Pressable>
        </View>
        {/* forget password */}
        <View className="w-full mt-5 flex items-end justify-end">
          <Text className="text-xs font-medium text-green-600">
            Forget password
          </Text>
        </View>
        {/* button */}
        <Pressable
          onPress={() => {
            loginHandler();
          }}
          className="mt-5 w-full bg-green-600 flex items-center justify-center py-3.5 rounded-xl"
        >
          <Text className="text-white">Login</Text>
        </Pressable>
        {/* social logins */}
        <View className="mt-10">
          {/* text */}
          <View className="flex flex-row items-center gap-1.5 justify-center">
            <View className="w-5 h-[.05rem] bg-neutral-400" />
            <Text className="text-sm text-neutral-400">Or continue with</Text>
            <View className="w-5 h-[.05rem] bg-neutral-400" />
          </View>
          {/* links */}
          <View className="flex flex-row gap-5 mt-5 ">
            {/* google */}
            <View className="w-[47%] shrink-0 bg-neutral-100 flex items-center justify-start gap-3 flex-row px-3 py-2 rounded-xl">
              <View className="w-8 aspect-square overflow-hidden">
                <Image
                  source={GoogleLogo}
                  className="w-full h-full object-center object-cover"
                />
              </View>
              <Text className="text-sm text-neutral-400">Google</Text>
            </View>
            {/* facebook */}
            <View className="w-[47%] shrink-0 bg-neutral-100 flex items-center justify-start gap-1 flex-row px-3 py-2 rounded-xl">
              <View className="w-8 rounded-full aspect-square overflow-hidden">
                <Image
                  source={FacebookLogo}
                  className="w-full h-full object-center object-cover"
                />
              </View>
              <Text className="text-sm text-neutral-400">Facebook</Text>
            </View>
          </View>
        </View>
        {/* have no account */}
        <View className="mt-9 flex flex-row gap-x-3 items-center justify-end">
          <Text className="text-sm text-neutral-400">Haven't any account?</Text>
          <Link href={"/register"} className="text-sm text-green-600 w-max">
            Sign up
          </Link>
        </View>
      </View>
    </View>
  );
}
