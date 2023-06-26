import { Address } from '@address/infra/db/typeorm/entities/address';
import { State } from '@state/infra/db/typeorm/entities/state';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'city' })
export class City {
  @PrimaryColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ name: 'state_id', nullable: false })
  stateId: number;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
  state: State;

  @OneToMany(() => Address, (address) => address.city)
  address: Address[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
