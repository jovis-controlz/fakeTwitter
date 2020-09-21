module.exports = (sequelize, Sequelize) => {
  const post = sequelize.define(
    "post",
    {
      idPost: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: Sequelize.STRING,
      published_date: Sequelize.DATE,
    },
    {
      tableName: "posts",
    }
  );
  return post;
};
