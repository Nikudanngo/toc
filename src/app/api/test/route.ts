import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export function GET(request: NextRequest): NextResponse<ResponseData> {
  const params = request.nextUrl.searchParams;
  const query = params.get("query");
  return NextResponse.json({ message: "Hello", query: query });
}
