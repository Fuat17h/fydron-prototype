"use client";

import * as React from "react";
import {
  makeStyles,
  shorthands,
  tokens,
  Title1,
  Body1,
  Input,
  Button,
  Field,
  Link,
  Text,
  MessageBar,
  MessageBarBody,
  Spinner,
} from "@fluentui/react-components";
import {
  EyeRegular,
  EyeOffRegular,
  DismissCircleRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f2f1",
    ...shorthands.padding("20px"),
  },
  logo: {
    color: "#0097D7",
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "24px",
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding("40px"),
    ...shorthands.borderRadius("12px"),
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "460px",
    display: "flex",
    flexDirection: "column",
  },
  errorBanner: {
    marginBottom: "16px",
    backgroundColor: "#fffbfa",
    ...shorthands.border("1px", "solid", "#fde7e9"),
    ...shorthands.borderRadius("8px"),
    color: "#d13438",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  requirementItem: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    listStyleType: "disc",
    marginLeft: "20px",
  },
  submitBtn: {
    marginTop: "12px",
    backgroundColor: "#0097D7",
    color: "white",
    height: "44px",
    ":hover": { backgroundColor: "#0078ab" },
    ":disabled": { backgroundColor: "#89d1f3", color: "white" }, // Matches the "Please wait" lighter blue
  },
});

export default function CreatePasswordPage() {
  const styles = useStyles();

  // State Management
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <main className={styles.container}>
      <div className={styles.logo}>Fydron</div>

      <div className={styles.card}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Title1 block style={{ fontSize: "24px", marginBottom: "8px" }}>
            Create Password
          </Title1>
          <Body1 block italic style={{ color: tokens.colorNeutralForeground3 }}>
            Create a password to activate your account.
          </Body1>
        </div>

        {/* Validation Error Banner */}
        {error && (
          <MessageBar
            intent="error"
            className={styles.errorBanner}
            icon={<DismissCircleRegular />}
          >
            <MessageBarBody>{error}</MessageBarBody>
          </MessageBar>
        )}

        <form className={styles.form} onSubmit={handleSubmit}>
          <Field
            label="New Password"
            validationState={error ? "error" : "none"}
          >
            <Input
              value={password}
              onChange={(e, data) => setPassword(data.value)}
              type={showPassword ? "text" : "password"}
              contentAfter={
                <Button
                  appearance="transparent"
                  icon={showPassword ? <EyeOffRegular /> : <EyeRegular />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
            />
          </Field>

          <Field
            label="Confirm Password"
            validationState={error ? "error" : "none"}
          >
            <Input
              value={confirmPassword}
              onChange={(e, data) => setConfirmPassword(data.value)}
              type={showPassword ? "text" : "password"}
              contentAfter={
                <Button
                  appearance="transparent"
                  icon={showPassword ? <EyeOffRegular /> : <EyeRegular />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
            />
          </Field>

          <div style={{ marginTop: "8px" }}>
            <Text weight="semibold" size={200}>
              Minimum requirements
            </Text>
            <ul style={{ margin: "4px 0 0 0", padding: 0 }}>
              <li className={styles.requirementItem}>At least 12 characters</li>
              <li className={styles.requirementItem}>
                At least 1 uppercase letter, 1 lowercase letter
              </li>
              <li className={styles.requirementItem}>At least 1 number</li>
              <li className={styles.requirementItem}>
                At least 1 special character (!@#$%^&* etc.)
              </li>
            </ul>
          </div>

          <Button
            size="large"
            appearance="primary"
            className={styles.submitBtn}
            type="submit"
            disabled={isLoading}
            icon={
              isLoading ? <Spinner size="tiny" appearance="inverted" /> : null
            }
          >
            {isLoading ? "Please wait" : "Create password"}
          </Button>
        </form>
      </div>

      <div
        style={{
          marginTop: "24px",
          textAlign: "center",
          fontSize: "12px",
          color: "#616161",
        }}
      >
        By clicking continue, you agree to our <br />
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </div>
    </main>
  );
}
