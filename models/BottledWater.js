const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bottledWaterSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  ozPerBottle: {
    type: Number
  },
  numOfBottles: {
    type: Number
  },
  ozPerPack: {
    type: Number
  },
  ozPerDol: {
    type:Number
  },
  ph: {
    type: Number
  },
  img: {
    type: String
  },
  link: {
    type: String,
  },
  tags: {
    type: Array
  }
}, {
    timestamps: true
});

const BottledWater = mongoose.model('BottledWater', bottledWaterSchema);

module.exports = BottledWater;
