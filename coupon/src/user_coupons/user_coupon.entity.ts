import { Column, CreateDateColumn, Entity, Long, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserCoupon {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column('text')
    coupon_id: string

    @Column('text')
    user_id: string

    @Column('text')
    status: string
    
    @CreateDateColumn({ name: "created_at" })
    created_at: Date;
  
    @UpdateDateColumn({ name: "updated_at" }) 
    updated_at: Date;
}
