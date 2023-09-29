import { Module } from '@nestjs/common';
import { EnrollmentModule } from './resources/enrollment/enrollment.module';

@Module({
  imports: [EnrollmentModule],
})
export class AppModule {}
