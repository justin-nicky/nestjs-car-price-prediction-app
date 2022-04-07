import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @AfterInsert()
  logInsert() {
    console.log('Inserted a new user!');
  }
  @AfterUpdate()
  logUpdate() {
    console.log('Updated a user!');
  }
  @AfterRemove()
  logRemove() {
    console.log('Removed a user!');
  }
}
