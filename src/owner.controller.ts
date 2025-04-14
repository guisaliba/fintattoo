import { Controller, Post } from '@nestjs/common';
import type { OwnerService } from './owner.service';
import type { UUID } from 'crypto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post('register')
  getOwners(): { id: UUID; name: string } {
    return this.ownerService.createOwner('Ellen Paula');
  }
}
