import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCoupon } from './user_coupon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserCoupon])]
})
export class UserCouponsModule {}
