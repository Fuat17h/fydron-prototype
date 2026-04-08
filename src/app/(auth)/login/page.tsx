"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import {
  makeStyles,
  typographyStyles,
  shorthands,
  Input,
  Button,
  Label,
  Text,
  Link,
} from "@fluentui/react-components";

import { EyeRegular, EyeOffRegular } from "@fluentui/react-icons";
import { login } from "@/lib/auth";

const useStyles = makeStyles({
  // ===== Layout =====
  rootContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f5f7",
  },
  innerWrapper: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    marginBottom: "32px",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    border: "1px solid #e0e0e0",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    marginTop: "24px",
    textAlign: "center",
    color: "#6b7280",
    ...typographyStyles.caption1,
  },
  footerLink: {
    color: "#0B98D4",
    textDecorationLine: "none",
    borderBottom: "1px solid #0B98D4",
  },

  // ===== Form =====
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    ...typographyStyles.title3,
    fontWeight: "600",
    fontSize: "18px",
    marginBottom: "8px",
  },
  subtitle: {
    ...typographyStyles.body1,
    fontSize: "14px",
    color: "#6b7280",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
  },
  roundedInput: {
    ...shorthands.borderRadius("6px"),
  },
  requirementsList: {
    margin: "12px 0 24px 0",
    paddingLeft: "20px",
    color: "#6b7280",
    ...typographyStyles.caption1,
  },
  submitButton: {
    width: "100%",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#0B98D4",
  },
});

export default function Page() {
  const styles = useStyles();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    login();
    router.push("/dashboard");
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.innerWrapper}>
        {/* Logo */}
        <Image
          src="/fydron_logo.png"
          alt="Fydron"
          width={134}
          height={50}
          className={styles.logo}
        />

        {/* Card */}
        <div className={styles.card}>
          <div className={styles.header}>
            <Text className={styles.title}>Create Password</Text>
            <Text className={styles.subtitle}>
              Create a password to activate your account.
            </Text>
          </div>

          <div className={styles.formGroup}>
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              className={styles.roundedInput}
              type={showPassword ? "text" : "password"}
              contentAfter={
                <Button
                  appearance="transparent"
                  icon={showPassword ? <EyeOffRegular /> : <EyeRegular />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
            />
          </div>

          <div className={styles.formGroup}>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              className={styles.roundedInput}
              type={showConfirmPassword ? "text" : "password"}
              contentAfter={
                <Button
                  appearance="transparent"
                  icon={
                    showConfirmPassword ? <EyeOffRegular /> : <EyeRegular />
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
            />
          </div>

          <div>
            <Text size={300}>Minimum requirements</Text>
            <ul className={styles.requirementsList}>
              <li>At least 12 characters</li>
              <li>Uppercase & lowercase letters</li>
              <li>At least 1 number</li>
              <li>At least 1 special character</li>
            </ul>
          </div>

          <Button
            appearance="primary"
            className={styles.submitButton}
            onClick={handleLogin}
          >
            Create password
          </Button>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <Text>By clicking continue, you agree to our</Text>
          <br />
          <Link href="#" className={styles.footerLink}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className={styles.footerLink}>
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
