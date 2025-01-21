import { NextResponse } from "next/server";

export function errorHandler(error) {
  const isDev = process.env.NODE_ENV === "development";

  // TODO: Intergrate logging service
  console.error("Error:", error);

  const errorResponse = {
    error: true,
    message: isDev
      ? error.message
      : "An error occurred. Please try again later.",
    ...(isDev && { stack: error.stack }),
  };

  const statusCode = error.status || 500;

  return NextResponse.json(errorResponse, {
    status: statusCode,
    headers: { "Content-Type": "application/json" },
  });
}
