import * as YUP from "yup";

const RegisterationSchema = YUP.object().shape({
  name: YUP.string().required("Name is required"),

  email: YUP.string().email("Invalid email").required("Email is required"),

  password: YUP.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long, contain letters, numbers, and at least one special character"
    )
    .required("Password is required"),

  specialization: YUP.string().required("Specialization is required"),
});

export const AddProjectSchema = YUP.object().shape({
  projectTitle: YUP.string()
    .min(3, "Project title must be at least 3 characters long")
    .required("Project title is required"),

  description: YUP.string()
    .min(10, "Description must be at least 10 characters long")
    .required("Project description is required"),

  technologies: YUP.string()
    .matches(
      /^[A-Za-z0-9, ]+$/,
      "Technologies must be a comma-separated list of valid words"
    )
    .required("Technologies are required"),
});
export default RegisterationSchema;
