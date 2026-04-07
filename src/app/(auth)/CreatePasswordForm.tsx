"use client";

import { useState } from "react";
import {
  makeStyles,
  typographyStyles,
  shorthands,
  Input,
  Button,
  Label,
  Text,
} from "@fluentui/react-components";
import { EyeRegular, EyeOffRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    ...typographyStyles.title3,
    fontWeight: "600",
    fontSize: "18px",
    display: "block",
    marginBottom: "8px",
    justifySelf: "center",
  },
  subtitle: {
    ...typographyStyles.body1,
    fontWeight: "normal",
    fontSize: "14px",
    justifySelf: "center",
    color: "#6b7280",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "16px",
    fontWeight: "500",
    fontSize: "14px",
  },
  roundedInput: {
    ...shorthands.borderRadius("6px"),
  },
  requirementsList: {
    margin: "12px 0 24px 0",
    paddingLeft: "20px",
    color: "#6b7280",
    ...typographyStyles.caption1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    listStyleType: "disc",
    "& li": {
      display: "list-item",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
  submitButton: {
    marginTop: "auto", // Pushes button to the bottom if needed, or just sits below content
    width: "100%",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#0B98D4",
    fontWeight: "500",
    fontSize: "14px",
    fontStyle: "regular",
  },
});

export const CreatePasswordForm = () => {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
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
              aria-label="Toggle password visibility"
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
              icon={showConfirmPassword ? <EyeOffRegular /> : <EyeRegular />}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label="Toggle confirm password visibility"
            />
          }
        />
      </div>

      <div>
        <Text style={{ color: "#424242", fontWeight: "400", fontSize: "14px" }}>
          Minimum requirements
        </Text>
        <ul className={styles.requirementsList}>
          <li>At least 12 characters</li>
          <li>At least 1 uppercase letter, 1 lowercase letter</li>
          <li>At least 1 number</li>
          <li>At least 1 special character (!@#$%^&* etc.)</li>
        </ul>
      </div>

      <Button appearance="primary" className={styles.submitButton}>
        Create password
      </Button>
    </>
  );
};
