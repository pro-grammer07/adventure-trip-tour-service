import express from "express";
import {
  createContact,
  getAllContacts,
} from "../Controllers/contactController.js";
import {
  createDestination,
  getAllDestinations,
} from "../Controllers/destinationController.js";
import {
  createForeign,
  getAllForeigns,
} from "../Controllers/foreignController.js";
import {
  createTestimonial,
  getAllTestimonials,
} from "../Controllers/testimonialController.js";

const router = express.Router();

// customer route
router.post("/createContact", createContact);
router.get("/getContacts", getAllContacts);

// destination routes
router.post("/createDestination", createDestination);
router.get("/getDestinations", getAllDestinations);

// international tour routes
router.post("/createDestination", createForeign);
router.get("/getDestinations", getAllForeigns);

// testimonial routes
router.post("/createTestimonial", createTestimonial);
router.get("/getTestimonials", getAllTestimonials);

export default router;
