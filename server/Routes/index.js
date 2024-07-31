import express from "express";
import {
  createContact,
  getAllContacts,
} from "../Controllers/contactController.js";
import {
  createDestination,
  getAllDestinations,
} from "../Controllers/destinationController.js";
// import {createTestimonial}

const router = express.Router();

// customer route
router.post("/createContact", createContact);
router.get("/getContacts", getAllContacts);

// post routes
router.post("/createDestination", createDestination);
router.get("/getDestinations", getAllDestinations);

// testimonial routes
// router.post("/createTestimonial", createTestimonial);
// router.get("/getTestimonials", getAllTestimonials);

export default router;
