export default function Validation(req, res, next) {
  const { name, price, image } = req.body;
  const errors = [];
  if (!name || name.trim() === "") {
    errors.push("Please Enter Name");
  }

  if (!price || parseFloat(price) <= 0) {
    errors.push("Please Enter Valid Price");
  }

  try {
    const validUrl = new URL(image);
  } catch (error) {
    errors.push("Invalid URL");
  }

  if (errors.length > 0) {
    return res.render("addProduct", { errorMessage: errors[0] });
  } else {
    next();
  }
}
