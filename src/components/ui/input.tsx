import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="border rounded p-2" {...props} />;
}
