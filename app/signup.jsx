import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function SignUpScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const router = useRouter();
  


  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (error) setError("");
  };

  const handleSignUp = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {

        router.push('/home')
       
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={[styles.container, { paddingTop: insets.top }]}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Sign up to get started with fast, reliable pickups
          </Text>
        </View>

        <View style={styles.form}>
          {/* Name row */}
          <View style={styles.nameRow}>
            <View
              style={[
                styles.inputWrapper,
                styles.nameInput,
                focusedField === "firstName" && styles.inputWrapperFocused,
              ]}
            >
              <User
                size={18}
                color={focusedField === "firstName" ? "#004a94" : "#9CA3AF"}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="First name"
                placeholderTextColor="#9CA3AF"
                value={form.firstName}
                onChangeText={(v) => handleChange("firstName", v)}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
                autoCapitalize="words"
              />
            </View>

            <View
              style={[
                styles.inputWrapper,
                styles.nameInput,
                focusedField === "lastName" && styles.inputWrapperFocused,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Last name"
                placeholderTextColor="#9CA3AF"
                value={form.lastName}
                onChangeText={(v) => handleChange("lastName", v)}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
                autoCapitalize="words"
              />
            </View>
          </View>

          {/* Email field */}
          <View
            style={[
              styles.inputWrapper,
              focusedField === "email" && styles.inputWrapperFocused,
            ]}
          >
            <Mail
              size={18}
              color={focusedField === "email" ? "#004a94" : "#9CA3AF"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={form.email}
              onChangeText={(v) => handleChange("email", v)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
            />
          </View>

          {/* Password field */}
          <View
            style={[
              styles.inputWrapper,
              focusedField === "password" && styles.inputWrapperFocused,
            ]}
          >
            <Lock
              size={18}
              color={focusedField === "password" ? "#004a94" : "#9CA3AF"}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={form.password}
              onChangeText={(v) => handleChange("password", v)}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {showPassword ? (
                <EyeOff size={18} color="#9CA3AF" />
              ) : (
                <Eye size={18} color="#9CA3AF" />
              )}
            </TouchableOpacity>
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Text style={styles.termsText}>
            By signing up, you agree to our{" "}
            <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>

          <TouchableOpacity
            style={[styles.signUpButton, loading && styles.signUpButtonDisabled]}
            onPress={handleSignUp}
            disabled={loading}
            activeOpacity={0.85}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.signUpButtonText}>Create Account</Text>
                <ArrowRight size={18} color="#fff" />
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 24,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 21,
  },
  form: {
    gap: 14,
  },
  nameRow: {
    flexDirection: "row",
    gap: 12,
  },
  nameInput: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 54,
    borderWidth: 1.5,
    borderColor: "transparent",
    gap: 10,
  },
  inputWrapperFocused: {
    borderColor: "#004a94",
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },
  errorText: {
    color: "#DC2626",
    fontSize: 13,
    marginTop: -4,
  },
  termsText: {
    fontSize: 12.5,
    color: "#9CA3AF",
    lineHeight: 18,
    marginTop: 4,
  },
  termsLink: {
    color: "#004a94",
    fontWeight: "600",
  },
  signUpButton: {
    flexDirection: "row",
    backgroundColor: "#004a94",
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 8,
    shadowColor: "#004a94",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
  },
  signUpButtonDisabled: {
    opacity: 0.7,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    color: "#9CA3AF",
    fontSize: 13,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#6B7280",
    fontSize: 14,
  },
  footerLink: {
    color: "#004a94",
    fontSize: 14,
    fontWeight: "700",
  },
});