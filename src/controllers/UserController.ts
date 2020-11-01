import { inject, injectable } from 'inversify'
import { JsonController, Param, Body, Get, Post, Put, Delete, BadRequestError } from 'routing-controllers'
import TYPES from '../inversify/inversifyTypes'
import IUserMainteUsecase from '../usecases/userMainteUsecase'
import 'reflect-metadata';
import { User } from '../entities/user'

@injectable()
@JsonController('/users')
export class UserController {
  
  constructor(@inject(TYPES.IUserMainteUsercase) private usecase: IUserMainteUsecase){
  }

  @Get('/')
  getAll() {
    return this.usecase.searchAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.usecase.searchById(id);
  }

  @Post('/')
  post(@Body() user: User) {
    this.usecase.createUser(user);
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: User) {
    this.usecase.updateUser(user);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    this.usecase.deleteUser(id);
  }


}