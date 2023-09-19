"use client";

import EmptyState from "@/components/commons/EmptyState";
import React, { useEffect } from "react";

type Props = {
  error: Error;
};

const error: React.FC<Props> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong..." />;
};

export default error;
