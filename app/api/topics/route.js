import Topic from "@/models/Topic";
import { NextResponse } from "next/server";
import dbConnect from "@/libs/connectDB";


export async function POST(request) {
    const { title, description } = await request.json();
    await dbConnect();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  }


  export async function GET() {
    await dbConnect();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}


export async function DELETE(request){
  const id = request.nextUrl.searchParams.get("id");
  await dbConnect();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message:"Topic deleted"}, { status: 200 });
}

