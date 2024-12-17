import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Review from "../../models/Review";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === "GET") {
      const reviews = await Review.find({});
      return res.status(200).json({ success: true, data: reviews });
    }

    if (req.method === "POST") {
      const { name, text } = req.body;
      if (!name || !text) {
        return res.status(400).json({ success: false, message: "Name and text are required." });
      }

      const review = await Review.create({ name, text });
      return res.status(201).json({ success: true, data: review });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  } catch (error) {
    console.error("Error in /api/reviews:", error);
    return res.status(500).json({ success: false, message: "Server Error. Please try again later." });
  }
}
