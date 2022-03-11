import { Column, CreateDateColumn, Entity, Long, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column('text')
    code: string

    @Column('text')
    discount_type: string

    @Column('text')
    discount_value: string

    @Column("timestamp")
    public assigne_at: Date;

    @Column({ type: "timestamp", precision: 6, nullable: true })
    public end_at: Date;
    
    @CreateDateColumn({ name: "created_at" })
    created_at: Date;
  
    @UpdateDateColumn({ name: "updated_at" }) 
    updated_at: Date;
}
