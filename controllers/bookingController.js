const Book = require("../models/book");

exports.book = async (req, res) => {
  const seat = req.body.seat;
  var a = 45;
  if (seat > 45) {
    return res.send({ message: `Only ${a} Seats Are Available` });
  }
  var bus = await Book.findOne({ name: "Bus1" });
  console.log("This is bus", bus);

  var booked = 0;
  var available = 0;

  for (i = 0; i < bus.matrix.length; i++) {
    if (booked === seat) {
      // await bus.save();
      // bus.save(function (err, res) {
      //   if (err) {
      //     throw err;
      //   }
      //   console.log("test me", res);
      // });
      break;
      // return res.status(201).send(matrix);
    }
    for (j = 0; j < 7; j++) {
      +available++;

      if (booked === seat) {
        break;
        // return res.status(201).send(matrix);
      }
      console.log("This is bus matrix booked", bus.matrix[i][j].booked);
      if (bus.matrix[i][j].booked === 0) {
        bus.matrix[i][j].booked = 1;
        // await bus.save();

        booked++;
      }
      console.log(booked);
      console.log(seat);
    }
  }
  console.log("This matrixay", bus.matrix);
  a = 45 - (available - 1);
  console.log(bus.matrix);
  // await bus.save();
  console.log(bus);
  // await bus.save();
  // bus.save(function (err, res) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log("test me", res);
  // });
  await bus.save();
  res.status(201).json({
    availableSeats: a,
    seatMatrix: bus.matrix,
  });
};

exports.reset = async (req, res) => {
  var bus = await Book.findOneAndDelete({ name: "Bus1" });
  console.log("This is bus", bus);
  var arr = [
    [
      { seat: "1", booked: 0 },
      { seat: "2", booked: 0 },
      { seat: "3", booked: 0 },
      { seat: "4", booked: 0 },
      { seat: "5", booked: 0 },
      { seat: "6", booked: 0 },
      { seat: "7", booked: 0 },
    ],
    [
      { seat: "8", booked: 0 },
      { seat: "9", booked: 0 },
      { seat: "10", booked: 0 },
      { seat: "11", booked: 0 },
      { seat: "12", booked: 0 },
      { seat: "13", booked: 0 },
      { seat: "14", booked: 0 },
    ],
    [
      { seat: "15", booked: 0 },
      { seat: "16", booked: 0 },
      { seat: "17", booked: 0 },
      { seat: "18", booked: 0 },
      { seat: "19", booked: 0 },
      { seat: "20", booked: 0 },
      { seat: "21", booked: 0 },
    ],
    [
      { seat: "22", booked: 0 },
      { seat: "23", booked: 0 },
      { seat: "24", booked: 0 },
      { seat: "25", booked: 0 },
      { seat: "26", booked: 0 },
      { seat: "27", booked: 0 },
      { seat: "28", booked: 0 },
    ],
    [
      { seat: "29", booked: 0 },
      { seat: "30", booked: 0 },
      { seat: "31", booked: 0 },
      { seat: "32", booked: 0 },
      { seat: "33", booked: 0 },
      { seat: "34", booked: 0 },
      { seat: "35", booked: 0 },
    ],
    [
      { seat: "36", booked: 0 },
      { seat: "37", booked: 0 },
      { seat: "38", booked: 0 },
      { seat: "39", booked: 0 },
      { seat: "40", booked: 0 },
      { seat: "41", booked: 0 },
      { seat: "42", booked: 0 },
    ],
    [
      { seat: "43", booked: 0 },
      { seat: "44", booked: 0 },
      { seat: "45", booked: 0 },
    ],
    // [0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0],
  ];
  const matrix = new Book({
    matrix: arr,
  });
  await matrix.save();
  console.log(matrix);
  res.send(matrix);
};

exports.getBooking = async (req, res) => {
  try {
    console.log("Inside Booking");
    const bus = await Book.findOne({ name: "Bus1" });
    res.status(200).send(bus);
  } catch (error) {
    res.status(500).send(error);
  }
};
