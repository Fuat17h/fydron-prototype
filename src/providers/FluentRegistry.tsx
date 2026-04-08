"use client";

import React from "react";
import {
  FluentProvider,
  //webLightTheme,
  SSRProvider,
  RendererProvider,
  createDOMRenderer,
} from "@fluentui/react-components";

import { fydronTheme } from "../lib/fydronTheme";

// For Next.js App Router, we no longer need a custom insertion factory in most cases.
// The library now handles style insertion better out of the box with SSRProvider + RendererProvider.

export function FluentRegistry({ children }: { children: React.ReactNode }) {
  const renderer = React.useMemo(() => createDOMRenderer(), []);

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={fydronTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
