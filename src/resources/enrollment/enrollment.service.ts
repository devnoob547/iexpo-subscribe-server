import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateEnrollmentDTO } from 'src/dtos/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async createEnrollment({ name, email }: CreateEnrollmentDTO) {
    const enrollment = await this.prisma.enrollment.create({
      data: {
        name,
        email,
      },
    });

    return enrollment;
  }

  async listEnrollments() {
    const enrollments = await this.prisma.enrollment.findMany();

    return enrollments;
  }

  async deleteEnrollments(id: string) {
    const enrollments = await this.prisma.enrollment.delete({
      where: {
        id,
      },
    });

    return enrollments;
  }
}
