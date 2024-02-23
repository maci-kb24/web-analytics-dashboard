import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === "/") {
        try {
        analytics.track("pageview", { page: "/", country: req.geo?.country, });       
        } catch (error) {
            console.error(error);
        }
    }

    return NextResponse.next();
} 

export const matcher =  {
    matcher: ['/'],
}
  