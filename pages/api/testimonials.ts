import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Testimonial from "../../models/Testimonials";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    if (req.method === "GET") {
      const testimonials = await Testimonial.find({});
      return res.status(200).json({ success: true, data: testimonials });
    }

    if (req.method === "POST") {
      const { name, text } = req.body;
      if (!name || !text) {
        return res
          .status(400)
          .json({ success: false, message: "Name and text are required." });
      }

      const testimonial = await Testimonial.create({ name, text });
      return res.status(201).json({ success: true, data: testimonial });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  } catch (error) {
    console.error("Error in /api/testimonials:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server Error. Please try again later." });
  }
}
