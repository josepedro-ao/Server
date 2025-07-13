import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

// Tipos
interface EditoraAttributes {
  id_editora: number;
  nome: string;
}

interface EditoraCreationAttributes extends Optional<EditoraAttributes, "id_editora"> {}

// Modelo Sequelize tipado corretamente
class Editora extends Model<EditoraAttributes, EditoraCreationAttributes>
  implements EditoraAttributes {
  public id_editora!: number;
  public nome!: string;

  public readonly estado!: Boolean;
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
    },
  },
  {
    sequelize, // <- aqui importa direto de database/index.ts
    tableName: "editora",
    timestamps: true,
  }
);

export default Editora;
