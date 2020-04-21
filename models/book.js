module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
    })
    Book.associate = function(models) {
        // We're saying that a Book should belong to a User
        // A Book can't be created without a User due to the foreign key constraint
        Book.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Book;
}