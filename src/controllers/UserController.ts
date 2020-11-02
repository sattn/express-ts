import { inject, injectable } from 'inversify'
import { JsonController, Param, Body, Get, Post, Put, Delete, BadRequestError } from 'routing-controllers'
import TYPES from '../inversify/inversifyTypes'
import IUserMainteUsecase from '../usecases/userMainteUsecase'
import 'reflect-metadata';
import { User } from '../entities/user'
import { response } from 'express';

@injectable()
@JsonController('/users')
export class UserController {
  
  constructor(@inject(TYPES.IUserMainteUsercase) private usecase: IUserMainteUsecase){
  }

  @Get('/')
  async getAll() {
    return await this.usecase.searchAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return await this.usecase.searchById(id);
  }

  @Post('/')
  async post(@Body() user: User) {
    await this.usecase.createUser(user);
    return {"result": "ok"}
  }

  @Put('/:id')
  async put(@Param('id') id: number, @Body() user: User) {
    await this.usecase.updateUser(user);
    return {"result": "ok"}
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    await this.usecase.deleteUser(id);
    return {"result": "ok"}
  }
}