import mongoose from "mongoose";

const machineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      required: true,
      enum: ["espresso", "filter", "bean-to-cup", "manual"]
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    coffeeTypeSupported: {
      type: [String],
      enum: ["beans", "ground"],
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    stock: {
      type: Number,
      default: 0,
      min: 0
    },

    image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Machine", machineSchema);
