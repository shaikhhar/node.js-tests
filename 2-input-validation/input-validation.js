const validator = require("validator");

const validateInput = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send({
      msg: "Name field required",
    });
  }

  if (!req.body.email) {
    return res.status(400).send({
      msg: "Email field required",
    });
  }

  if (validator.isEmpty(req.body.name)) {
    return res.status(400).send({
      msg: "Name can not be empty",
    });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).send({
      msg: "A valid email required",
    });
  }
  next();
};

module.exports = validateInput;
