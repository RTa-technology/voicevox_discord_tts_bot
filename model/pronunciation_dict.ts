import { Optional } from 'sequelize'
import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

export interface PronunciationModelAttributes {
  _id: number
  guildId: string
  name: boolean
  words: string
  pronunciation: string
}

export interface PronunciationCreationAttributes
  extends Optional<
    Omit<PronunciationModelAttributes, '_id'>,
    'name'
  > {}

@Table({
  tableName: 'pronunciation_setting',
  freezeTableName: true,
  underscored: true,
  timestamps: false,
})
class Pronunciation extends Model<
  PronunciationModelAttributes,
  PronunciationCreationAttributes
> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER, field: '_id' })
  _id!: number

  @Column(DataType.TEXT)
  guildId!: string

  @Default(true)
  @Column(DataType.BOOLEAN)
  name!: boolean

  @Column(DataType.TEXT)
  words!: string

  @Column(DataType.TEXT)
  pronunciation!: string
}

export default Pronunciation
