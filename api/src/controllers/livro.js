
module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define('Livro', {
      titulo: DataTypes.STRING,
      autor: DataTypes.STRING,
    });
  
    Livro.associate = (models) => {
      Livro.hasMany(models.Emprestimo, { foreignKey: 'livroId' });
    };
  
    return Livro;
  };
  