import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateEnrollmentDTO } from 'src/dtos/create-enrollment.dto';
import { Enrollment } from '@prisma/client';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async createEnrollment({
    name,
    email,
  }: CreateEnrollmentDTO): Promise<Enrollment> {
    const enrollment = await this.prisma.enrollment.create({
      data: {
        name,
        email,
      },
    });

    return enrollment;
  }

  async listEnrollments(): Promise<Enrollment[]> {
    const enrollments = await this.prisma.enrollment.findMany();

    return enrollments;
  }
}
