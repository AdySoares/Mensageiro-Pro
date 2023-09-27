import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Usuário",
          email: "admin@admin.com.br",
          passwordHash:
            "$2a$12$0DfqJ7RHK6/DwHFAiDf0PONa7YinuWS9XL9C8oFno0WZTPLMrlUn.",
          profile: "admin",
          tokenVersion: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
