import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { ModelAttributeColumnOptions } from "sequelize";

@Table({
  tableName: "menu_item",
  updatedAt: false,
})
export default class MenuItem extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  name: string;

  @Column
  url: string;

  @ForeignKey(() => MenuItem)
  @Column({
    type: "integer",
    defaultValue: null,
    references: {
      model: "MenuItem",
      key: "id",
    },
  } as ModelAttributeColumnOptions)
  parentId: number;

  @HasMany(() => MenuItem, { foreignKey: "parentId", as: "children" })
  children?: MenuItem[];

  @Column({ type: "datetime" } as ModelAttributeColumnOptions)
  declare createdAt: Date;
}
