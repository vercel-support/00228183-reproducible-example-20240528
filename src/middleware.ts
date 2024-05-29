import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(request: NextRequest) {
	const response = NextResponse.next();
  console.info("middleware.ts: request.url", request.url);
	return response;
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/((?!api|_next/static|_next/image|favicon.ico|img).*)'
};
