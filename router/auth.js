const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userShema");

router.get("/", (req, res) => {
  res.send(`hello from home router`);
});

router.get("/contact", (req, res) => {
  res.send(`hello from contact router`);
});

router.get("/about", (req, res) => {
  res.send(`hello from about router`);
});

//promice
// router.post("/register",  (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ eroor: "plz fill tha data" });
//   }

//   User.findOne({ email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.json({ error: "email alrady exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user.save().then(() => {
//         res
//           .status(201)
//           .json({ data: "submited" })
//           .catch((err) => res.status(500).json({ error: "fail to submit" }));
//       });
//     })
//     .catch((err) => console.log(err));
// });

// await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ eroor: "plz fill tha data" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.json({ error: "email alrady exist" });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });
    user.save();
    res.status(201).json({ data: "submited" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
