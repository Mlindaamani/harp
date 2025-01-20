export function errorHandler(error) {
  const isDev = process.env.NODE_ENV === "development";
  const errorResponse = {
    message: isDev
      ? error.message
      : "An error occurred. Please try again later.",
    ...(isDev && { stack: error.stack }),
  };

  return new Response(JSON.stringify(errorResponse), {
    status: error.status || 500,
    headers: { "Content-Type": "application/json" },
  });
}
