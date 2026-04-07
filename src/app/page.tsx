"use client";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Button, Title1 } from "@fluentui/react-components";
import { CreatePasswordForm } from "./(auth)/CreatePasswordForm";

export default function Home() {
  return (
    <main>
      {/* <Title1>Welcome to Fydron</Title1>
      <br />
      <Button appearance="primary">Fluent UI is working!</Button> */}

      <AuthLayout>
        <CreatePasswordForm />
      </AuthLayout>
    </main>
  );
}
