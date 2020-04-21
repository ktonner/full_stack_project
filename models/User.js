module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    User.associate = function(models) {
        // Associating User with Book
        // When an User is deleted, also delete any associated Book
        User.hasMany(models.Book, {
          onDelete: "cascade"
        });
      };

    return User;
}