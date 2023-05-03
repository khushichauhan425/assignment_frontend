import dotenv from "dotenv";
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const User= require('./models/dataSchema')


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true });

app.post('/contact', async(req, res) => {
const FullName = req.body.fullName
const EmailId = req.body.emailId
const PhoneNumber = req.body.phoneNumber

const formData = new User({
  name: FullName,
  email: EmailId,
  phone: PhoneNumber
})

try {
  await formData.save();
  res.send("inserted data..")
} catch(err) {
  console.log(err)
}
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});