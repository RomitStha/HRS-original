import {
  Table,
  Model,
  AllowNull,
  Column,
  DataType,
} from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true,
  paranoid: true,
})
export class User extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  email!: string;
}
