import mongoose, { Schema, Document, models } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  text: string;
}

const TestimonialSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Testimonial ||
  mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
