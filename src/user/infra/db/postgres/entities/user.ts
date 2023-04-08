import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 20 })
  cpf: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 200 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
