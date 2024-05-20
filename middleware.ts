import { NextRequest, NextResponse } from "next/server";
import { withLocales } from "nextra/locales";

export const middleware = withLocales((request: NextRequest) => {
  // Your middleware code...

  const response = NextResponse.next();
  console.log("Request URL:", request.url);
  return response;
});
