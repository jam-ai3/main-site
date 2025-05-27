import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
    try {
        (await cookies()).delete(process.env.JWT_KEY!);
        return new NextResponse(null, { status: 200 });
    }  catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}