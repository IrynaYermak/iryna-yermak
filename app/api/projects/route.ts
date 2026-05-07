import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";

export const dynamic = "force-dynamic";

export async function GET() {
  // throw new Error("Manual Debug Error");
  try {
    await connectToDatabase();

    const projects = await Project.find({});

    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      { message: "Помилка при отриманні проектів" },
      { status: 500 }
    );
  }
}
