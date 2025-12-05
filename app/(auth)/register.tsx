import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// assets

// contexts
// auth
import { useAuthContext } from "@/contexts/AuthContext";

export default function Register() {
  // states
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [focus, setFocus] = useState<"" | "USERNAME" | "EMAIL" | "PASSWORD">(
    ""
  );
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [error, setError] = useState({
    flag: "",
    message: "",
  });
  // contexts
  const { users, user, setUser, setUsers } = useAuthContext();

  // hooks
  const insets = useSafeAreaInsets();

  // effects
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  // handlers
  const singupHandler = () => {
    if (!username || !email || !password) {
      setError((prev) => {
        return {
          ...prev,
          message: "All input fields are required",
        };
      });
    } else {
      const emailRegex =
        /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
      const isUsernameExist = users.find((user) => user.username === username);
      const isEmailExist = users.find((user) => user.email === email);

      if (!emailRegex.test(email)) {
        setError({ flag: "email", message: "Invalid email address" });
      } else if (isUsernameExist) {
        setError({
          flag: "username",
          message: "Username already exist",
        });
      } else if (isEmailExist) {
        setError({ flag: "email", message: "Email address already exist" });
      } else if (password.length <= 4) {
        setError({ flag: "password", message: "Too short password" });
      } else {
        setError({ flag: "", message: "" });
        setUsername("");
        setEmail("");
        setPassword("");
        setUser({ id: users.length + 1, username, email, password });
        setUsers((prev) => [
          { id: users.length + 1, username, email, password },
          ...prev,
        ]);
        Keyboard.dismiss();
      }
    }
  };
  return (
    <View
      className="flex-1 bg-white flex-col flex  items-center justify-center px-3"
      style={{ padding: insets.top }}
    >
      <Text className="text-xl font-medium text-neutral-500">Sign Up</Text>
      <Text
        className={`text-sm text-center mt-5 transition-colors ease-in-out duration-300 ${error.message ? "text-red-600" : "text-neutral-400"}`}
      >
        {error.message || "User proper information to continue"}
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
        {/* email */}
        <View
          className={`mt-5 flex w-full transition-colors ease-in-out duration-300 flex-row items-center border  rounded-xl px-3 py-0.5  gap-1.5 ${error.flag === "email" ? "border-red-600" : focus === "EMAIL" || email ? "border-green-600" : "border-neutral-300"}`}
        >
          <Ionicons
            name="mail"
            size={16}
            color={
              error.flag === "email"
                ? "#dc2626"
                : focus === "EMAIL" || email
                  ? "#16a34a"
                  : "#b5b5b5"
            }
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            onFocus={() => {
              setFocus("EMAIL");
            }}
            onBlur={() => {
              setFocus("");
            }}
            placeholder="Email"
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
        {/* privacy */}
        <Text className="flex flex-row flex-wrap mt-7 text-sm text-neutral-400 text-center">
          By signing up, you agree to our{" "}
          <Text className="font-medium text-green-600">Terms & Conditions</Text>{" "}
          and <Text className="font-medium text-green-600">Privacy Policy</Text>
          .
        </Text>
        {/* button */}
        <Pressable
          onPress={() => {
            singupHandler();
          }}
          className="mt-7 w-full bg-green-600 flex items-center justify-center py-3.5 rounded-xl"
        >
          <Text className="text-white">Create Account</Text>
        </Pressable>

        {/* have no account */}
        <View className="mt-9 flex flex-row gap-x-3 items-center justify-end">
          <Text className="text-sm text-neutral-400">
            Already have an account?
          </Text>
          <Link href={"/login"} className="text-sm text-green-600 w-max">
            Sign in
          </Link>
        </View>
      </View>
    </View>
  );
}
