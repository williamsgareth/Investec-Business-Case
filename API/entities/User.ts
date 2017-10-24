import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

import { Profile } from './Profile';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: 'User'})
  name: string;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile
}