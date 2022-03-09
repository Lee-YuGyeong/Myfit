import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './coupon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coupon])]
})
export class CouponsModule {}
