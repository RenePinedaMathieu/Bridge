import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">{children}</div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
