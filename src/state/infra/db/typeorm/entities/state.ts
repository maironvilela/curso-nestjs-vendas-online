import { City } from '@city/infra/db/typeorm/entities/city';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'state' })
export class State {
  @PrimaryColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 2 })
  uf: string;

  @OneToMany(() => City, (city) => city.state)
  cities?: City[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
