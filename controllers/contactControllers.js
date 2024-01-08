// Whenever we create the API methods we give some labels to them

// @desc Get all contacts
// @routes GET /api/contacts
// @access public
const getContacts = (req,res) => {
    res.status(200).json({message : "Get all Contacts"});
};

// @desc Create New Contact
// @routes POST /api/contacts
// @access public
const createContact = (req,res) => {
    console.log("The req body for POST is -",req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are Mandatory !")
    }
    res.status(201).json({message : "Create Contact"})
}

// @desc Get Contact
// @routes GET /api/contacts/:id
// @access public
const getContact = (req,res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
}

// @desc Update Contact
// @routes PUT /api/contacts/:id
// @access public
const updateContact = (req,res) => {
    res.status(200).json({message : `Update contact for ${req.params.id}`})
}

// @desc Delete Contact
// @routes DELETE /api/contacts/:id
// @access public
const deleteContact = (req,res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id}`})
}

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
}