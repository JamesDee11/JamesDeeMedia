import mongoose, { Document, Schema } from "mongoose";

export interface ReviewDocument extends Document {
  name: string;
  text: string;
  createdAt: Date;
}

const ReviewSchema = new Schema<ReviewDocument>(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model<ReviewDocument>("Review", ReviewSchema);
