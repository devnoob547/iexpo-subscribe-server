import { Body, Controller, Post, Get } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDTO } from 'src/dtos/create-enrollment.dto';
import { Enrollment } from '@prisma/client';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  createEnrollment(@Body() body: CreateEnrollmentDTO): Promise<Enrollment> {
    return this.enrollmentService.createEnrollment(body);
  }

  @Get()
  listEnrollments() {
    return this.enrollmentService.listEnrollments();
  }
}
