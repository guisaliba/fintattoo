import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'This action returns all users';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `This action returns user with id: ${id}`;
  }

  @Post()
  createUser(@Body() createUserDto: any) {
    return `This action creates a new user with data: ${JSON.stringify(createUserDto)}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return `This action updates user with id: ${id} with data: ${JSON.stringify(updateUserDto)}`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `This action deletes user with id: ${id}`;
  }
}
