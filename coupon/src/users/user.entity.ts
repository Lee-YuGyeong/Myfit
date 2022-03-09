import { Column, CreateDateColumn, Entity, Long, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Long;

  @Column({ length: 400, unique: true })
  email: string;

  @Column("text")
  username: string;

  @Column("text")
  password: string;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  coupon_id!: number[] | null;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" }) 
  updated_at: Date;
}
