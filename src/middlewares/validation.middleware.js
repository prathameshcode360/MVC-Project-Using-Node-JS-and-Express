import { body, validationResult } from "express-validator";

export default async function expressValidation(req, res, next) {
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("image").isURL().withMessage("Image must be URL"),
  ];
  await Promise.all(rules.map((rule) => rule.run(req)));
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.render("addProduct", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
}
