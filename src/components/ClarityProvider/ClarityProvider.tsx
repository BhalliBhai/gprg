"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const projectId = "z5gqs0u9hn";
    Clarity.init(projectId);
  }, []);

  return null;
}