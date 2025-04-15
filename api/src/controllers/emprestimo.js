
module.exports = (sequelize, DataTypes) => {
    const Emprestimo = sequelize.define('Emprestimo', {
      retirada: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      devolucao: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      multa: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    });
  
    Emprestimo.associate = (models) => {
      Emprestimo.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
      Emprestimo.belongsTo(models.Livro, { foreignKey: 'livroId' });
    };
  
    return Emprestimo;
  };
  