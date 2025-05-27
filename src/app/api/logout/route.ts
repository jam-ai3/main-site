import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
    try {
        (await cookies()).delete(process.env.JWT_KEY!);
        const response = new NextResponse(null, { status: 200})

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