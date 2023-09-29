import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDTO } from 'src/dtos/create-enrollment.dto';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  createEnrollment(@Body() body: CreateEnrollmentDTO) {
    return this.enrollmentService.createEnrollment(body);
  }

  @Get()
  listEnrollments() {
    return this.enrollmentService.listEnrollments();
  }

  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteEnrollments(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollments(id);
  }
}
