import { CounterModel } from "../../models/couterModel";
import { ConnectDB } from "../../../config/config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();
    const count = await CounterModel.find({});    
    return NextResponse.json(count);
  } catch (error) {
    console.log(error);
  }
}

export async function POST() {
  try {
    const newCount = new CounterModel({
      date: new Date(),
    });
    await newCount.save();
    console.log("success");
   return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
}
