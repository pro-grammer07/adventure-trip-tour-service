import Destination from "../Models/destinationModel.js";

export const createDestination = async (req, res, next) => {
  try {
    const { image, location, days, price, availability, description } = req.body;

    // if (!description) {
    //   next("You must provide description");
    //   return;
    // }

    const destination = await Destination.create({
      image,
      location,
      days, 
      price, 
      availability,
      description,
    });

    res.status(200).json({
      success: true,
      message: "Destination Created Successfully",
      data: destination,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};

export const getAllDestinations = async (req, res, next) => {
  try {
    const destination = await Destination.find();
    console.log(destination);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: destination,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
