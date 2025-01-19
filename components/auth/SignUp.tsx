import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const formErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let valid = true;

    // Trim input values before validation
    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedFullName) {
      formErrors.fullName = "Full Name is required.";
      valid = false;
    } else if (/\d/.test(trimmedFullName)) {
      formErrors.fullName = "Full Name cannot contain numbers.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(trimmedEmail)) {
      formErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!trimmedPassword) {
      formErrors.password = "Password is required.";
      valid = false;
    } else if (trimmedPassword.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    if (!trimmedConfirmPassword) {
      formErrors.confirmPassword = "Please confirm your password.";
      valid = false;
    } else if (trimmedConfirmPassword !== trimmedPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(formErrors); 
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form contains errors. Please fix them and try again.");
    }
  };

  return (
    <BlurView className="flex rounded-xl justify-center items-center p-6">
      <Text className="text-3xl font-semibold mb-4 text-white">Sign Up</Text>

      <View className="w-full max-w-md space-y-4">
        <View>
          <Text className="text-xl font-medium text-white">Full Name</Text>
          <TextInput
            className="m-1 p-3 bg-white rounded-lg border border-gray-400"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor="#9CA3AF"
          />
          {errors.fullName && (
            <Text className="text-red-500 text-sm mt-1">{errors.fullName}</Text>
          )}
        </View>

        <View>
          <Text className="text-xl font-medium text-white">Email</Text>
          <TextInput
            className="m-1 p-3 bg-white rounded-lg border border-gray-400"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#9CA3AF"
          />
          {errors.email ?(
            <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>
          ):null}
        </View>

        <View>
          <Text className="text-xl font-medium text-white">Password</Text>
          <TextInput
            className="m-1 p-3 bg-white rounded-lg border border-gray-400"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />
          {errors.password && (
            <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>
          )}
        </View>

        <View>
          <Text className="text-xl font-medium text-white">
            Confirm Password
          </Text>
          <TextInput
            className="m-1 p-3 bg-white rounded-lg border border-gray-400"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />
          {errors.confirmPassword && (
            <Text className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </Text>
          )}
        </View>

        <TouchableOpacity
          className="w-full py-3 bg-red-700 rounded-lg mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-center text-white font-semibold">Sign Up</Text>
        </TouchableOpacity>

        <View className="w-full flex items-center mt-6">
          <Text className="text-white text-center">
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => {
                console.log("Navigate to Login Screen");
                // Add navigation logic here, e.g., navigation.navigate("Login");
              }}
            >
              <Text className="text-blue-400">Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </BlurView>
  );
};

export default SignUp;
