import Testimonial from "../Models/testimonialModel.js";
export const createTestimonial = async (req, res, next) => {
  try {
    const { name, image, profession, review } = req.body;

    if (!review) {
      next("You must provide review");
      return;
    }

    const testimonial = await Testimonial.create({
      name,
      image,
      profession,
      review,
    });

    res.status(200).json({
      success: true,
      message: "Testimonial Created Successfully",
      data: testimonial,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};

export const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.find();
    console.log(testimonial);
    res.status(200).json({
      success: true,
      message: "successfully",
      data: testimonial,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
