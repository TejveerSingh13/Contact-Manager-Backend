// Whenever we create the API methods we give some labels to them

// asyncHandler is a express tool that capture exceptions inside the async functions
// and send the errors to the Error Handler middleware without us writing the try catch block for each async function
const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @routes GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
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
  res.status(201).json({ message: "Create Contact" });
});

// @desc Get Contact
// @routes GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// @desc Update Contact
// @routes PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// @desc Delete Contact
// @routes DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
