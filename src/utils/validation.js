export function emailValidation(value) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!value || regex.test(value) === false) {
    return {
      message: "Email is not valid",
      valid: false,
    };
  }
  return {
    message: "Email is valid",
    valid: true,
  };
}
