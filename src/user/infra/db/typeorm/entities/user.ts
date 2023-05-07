import { Address } from '@address/infra/db/typeorm/entities/address';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  cpf: string;

  @Column({ length: 100 })
  phone: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @OneToOne(() => Address, (address) => address.user)
  address: Address;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
