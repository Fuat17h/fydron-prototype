"use client";

import {
  makeStyles,
  typographyStyles,
  Link,
  Text,
} from "@fluentui/react-components";
import Image from "next/image";

// Standardizing styles using Fluent UI's makeStyles
const useStyles = makeStyles({
  rootContainer: {
    // width: "1440px",
    // height: "1024px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    margin: "0 auto", // Centers the fixed container on larger screens
    backgroundColor: "#f4f5f7",
  },
  innerWrapper: {
    width: "400px",
    height: "608px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "134px",
    height: "50px",
    marginBottom: "32px",
    objectFit: "contain",
  },
  card: {
    width: "400px",
    height: "470px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    border: "1px solid #e0e0e0",
    padding: "32px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    marginTop: "24px",
    textAlign: "center",
    color: "#6b7280",
    ...typographyStyles.caption1,

    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
  },
  footerLink: {
    color: "#0B98D4",
    textDecorationLine: "none",
    borderBottom: "1px solid #0B98D4",
    ":hover": {
      color: "#0B98D4",
      textDecorationLine: "none",
    },
    ":active": {
      color: "#0B98D4",
      textDecorationLine: "none",
    },
  },
});

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyles();

  return (
    <div className={styles.rootContainer}>
      <div className={styles.innerWrapper}>
        {/* Replace src with your actual logo path */}
        <Image
          src="/fydron_logo.png"
          alt="Fydron"
          width={134}
          height={50}
          className={styles.logo}
        />

        <div className={styles.card}>{children}</div>

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
};
