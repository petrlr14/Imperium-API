import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Workstation } from './workstation.entity';

@Entity({ name: 'workstation_action' })
export class WorkstationAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'workstation_use' })
export class WorkstationUse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => User,
    user => user.id,
  )
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => Workstation,
    workstation => workstation.id,
  )
  @JoinColumn({ name: 'workstation_id' })
  workstation: Workstation;

  @ManyToOne(
    () => WorkstationAction,
    action => action.id,
  )
  @JoinColumn({ name: 'workstation_action_id' })
  action: WorkstationAction;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

@Entity({ name: 'workstation_state' })
export class WorkstationState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'workstation_type' })
export class WorkstationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'workstation_category' })
export class WorkstationCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @ManyToOne(
    () => WorkstationType,
    workstationType => workstationType.id,
  )
  @JoinColumn({ name: 'workstation_type_id' })
  workstationType: WorkstationType;

  @OneToMany(
    () => Workstation,
    workstation => workstation.workstationCategory,
  )
  workstations: Workstation;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
