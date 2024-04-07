import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import Cors from 'cors';
import initMiddleware from 'next-connect';

// Initialize CORS middleware
const cors = initMiddleware(
  Cors({
    origin: '*', // Allow requests from any origin
    methods: ['GET', 'POST', 'DELETE'], // Define the allowed HTTP methods
  })
);

export async function POST(request) {
  // Enable CORS for the POST request
  await cors(request, request.res);

  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET(request) {
  // Enable CORS for the GET request
  await cors(request, request.res);

  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  // Enable CORS for the DELETE request
  await cors(request, request.res);

  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
