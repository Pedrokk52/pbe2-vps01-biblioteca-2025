
module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
    });
  
    Aluno.associate = (models) => {
      Aluno.hasMany(models.Emprestimo, { foreignKey: 'alunoId' });
    };
  
    return Aluno;
  };
