const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    // encontrar todos los usuarios que terminent con @algo
    //  y todos los que viven en un lugar especifico
    //  y buscar tech que empiezan con react

    const user = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@test.com",
        },
      },
      include: [
        { association: "addresses", where: { street: "test Street" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "Ionic",
            },
          },
        },
      ],
    });
    return res.json(user);
  },
};
