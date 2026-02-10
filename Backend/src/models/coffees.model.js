
import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    stock: {
      type: Number,
      required: true,
      min: 0
    },

    origin: {
      type: String,
      required: true
    },

    roastLevel: {
      type: String,
      enum: ["Light", "Medium", "Dark"],
      required: true
    },

    tasteProfile: {
      type: [String],
      required: true
    },

    intensity: {
      type: Number,
      min: 1,
      max: 5
    },

    images: [String],

    
  },
  { timestamps: true }
);

export default mongoose.model("coffee", coffeeSchema);
