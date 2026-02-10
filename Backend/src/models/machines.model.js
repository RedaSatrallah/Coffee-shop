import mongoose from "mongoose";
const machineSchema = new mongoose.Schema( 

    {
  name: String,
  type: {
    type: String,
    enum: ["espresso", "filter", "bean-to-cup", "manual"]
  },

   description: {
      type: String,
      required: true
    },

  
  coffeeTypeSupported: {
    type: [String],
    enum: ["beans", "ground"]
  },
  price: Number,
  stock: Number,
  image: String
}
,
{ timestamps: true }
) ;

export default mongoose.model("machine", machineSchema);