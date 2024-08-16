import Foreign from "../Models/foreignModel.js";

export const createForeign = async (req, res, next) => {
  try {
    const { image, location, days, description } = req.body;

    if (!description) {
      next("You must provide description");
      return;
    }

    const foreign = await Foreign.create({
      image,
      location,
      days, 
      description,
    });

    res.status(200).json({
      success: true,
      message: "Foreign Created Successfully",
      data: foreign,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};

export const getAllForeign = async (req, res, next) => {
  try {
    const foreign = await Foreign.find();
    console.log(post);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: foreign,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
