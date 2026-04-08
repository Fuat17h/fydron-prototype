"use client";
import { Input, Button } from "@fluentui/react-components";

export default function SettingsPage() {
  return (
    <div>
      <h2>Welcome to Settings</h2>
      <Input
        id="new-password"
        // className={styles.roundedInput}
        // type={showPassword ? "text" : "password"}
        contentAfter={
          <Button
            appearance="transparent"
            aria-label="Toggle password visibility"
          />
        }
      />
    </div>
  );
}
