import { Injectable } from '@nestjs/common';
import { randomUUID, type UUID } from 'crypto';

@Injectable()
export class OwnerService {
  private owners: { id: UUID; name: string }[] = [];

  createOwner(name: string): { id: UUID; name: string } {
    const newOwner = {
      id: randomUUID(),
      name,
    };
    this.owners.push(newOwner);
    return newOwner;
  }

  getOwners(): { id: UUID; name: string }[] {
    return this.owners;
  }

  getOwnerById(id: UUID): { id: UUID; name: string } | undefined {
    return this.owners.find((owner) => owner.id === id);
  }
}
