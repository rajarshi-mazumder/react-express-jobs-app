export const authenticateUser = async (req, res, next) => {
  console.log("Auth middleware");
  next();
};
