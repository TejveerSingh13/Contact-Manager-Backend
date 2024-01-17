// Whenever we create the API methods we give some labels to them

// asyncHandler is a express tool that capture exceptions inside the async functions
// and send the errors to the Error Handler middleware without us writing the try catch block for each async function
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModal");

// @desc Get all contacts
// @routes GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Create New Contact
// @routes POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The req body for POST is -", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are Mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

// @desc Get Contact
// @routes GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log("error", contact, req.params.id);
    if (!contact) {
      res.status(404); // Set the status code to 404
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(404); // Set the status code to 404
    throw new Error("Contact not found");
  }
});

// @desc Update Contact
// @routes PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log("error", contact, req.params.id);
    if (!contact) {
      res.status(404); // Set the status code to 404
      throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(404); // Set the status code to 404
    throw new Error("Contact not found");
  }
});

// @desc Delete Contact
// @routes DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  console.log("error", contact, req.params.id);
  if (!contact) {
    res.status(404); // Set the status code to 404
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
