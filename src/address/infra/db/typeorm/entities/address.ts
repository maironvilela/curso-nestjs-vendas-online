import { City } from '@city/infra/db/typeorm/entities/city';
import { User } from '@user/infra';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'address' })
export class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string; // alterar para street

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  neighborhood: string;

  @Column({ name: 'city_id', nullable: false })
  cityId: number;

  @ManyToOne(() => City, (city) => city.address)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city?: City;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
