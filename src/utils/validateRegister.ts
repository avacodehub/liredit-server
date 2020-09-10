import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
        {
          field: "email",
          message: "invalid email",
        },
      ];
    }

  if (options.username.length <= 2) {
    return [
        {
          field: "username",
          message: "username must be at least 3 characters long",
        },
      ]
    };
  

  if (options.username.includes('@')) {
    return [
        {
          field: "username",
          message: "username cannot include @",
        },
      ]
    };
  

  if (options.password.length <= 3) {
    return  [
        {
          field: "password",
          message: "password must be at least 4 characters long",
        },
      ]
    };
  

  return null
}