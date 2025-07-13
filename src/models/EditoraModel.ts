// src/models/EditoraModel.ts
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../database/index";

interface EditoraAttributes {
  id_editora?: number;
  nome: string;
}

// Interface para criação, tornando id_editora opcional
interface EditoraCreationAttributes extends Optional<EditoraAttributes, 'id_editora'> {}

class Editora extends Model<EditoraAttributes, EditoraCreationAttributes> 
  implements EditoraAttributes {
  public id_editora!: number;
  public nome!: string;
  
  // Timestamps serão adicionados automaticamente
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Editora.init(
  {
    id_editora: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "O nome da editora é obrigatório"
        }
      }
    }
  },
  {
    sequelize: connection,
    modelName: 'Editora',
    tableName: "editora",
    timestamps: true, // Habilita os timestamps
    createdAt: 'createdAt', // Nome exato da coluna no BD
    updatedAt: 'updatedAt', // Nome exato da coluna no BD
    underscored: false, // Desativa a conversão para snake_case
    freezeTableName: true // Evita pluralização
  }
);

export default Editora;