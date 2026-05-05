import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  try {
    // Підключаємося до бази
    await connectToDatabase();

    // Отримуємо всі проекти з бази
    const projects = await Project.find({});
    console.log("Отримано проекти:", projects);

    // Повертаємо їх у форматі JSON
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { message: "Помилка при отриманні проектів" },
      { status: 500 }
    );
  }
}
