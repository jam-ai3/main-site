import { NextResponse } from "next/server";

export async function DELETE(req: NextResponse) {
    try {
        const response = NextResponse.redirect(new URL("/", req.url));
        response.cookies.set(process.env.JWT_KEY!, "", {
          path: "/",
          expires: new Date(0),
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });

        return response
    }  catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}