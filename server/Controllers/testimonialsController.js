import Testimonial from "../Models/testimonialModel";

export const createTestimonial = async (req, res, next) => {
  try {
    const { name, image, profession, description } = req.body;

    if (!description) {
      next("You must provide description");
      return;
    }

    const testimonial = await Testimonial.create({
      name,
      image,
      profession,
      description,
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
    console.log(post);
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
