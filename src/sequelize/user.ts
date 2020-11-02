import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class UserModel extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

UserModel.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
    sequelize,
    tableName: 'Users'
});

export default UserModel;