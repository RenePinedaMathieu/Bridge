import React from "react";

export function Select({ options }: { options?: string[] }) {
  console.log("options received:", options);

  return (
    <select className="border rounded p-2">
      {options && options.length > 0 ? (
        options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))
      ) : (
        <option disabled>No options available</option>
      )}
    </select>
  );
}
