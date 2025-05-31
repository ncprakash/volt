export const dynamic = "force-dynamic";

import React from "react";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}
