import { JsonController, Param, Body, Get, Post, Put, Delete, BadRequestError } from 'routing-controllers'
import ValidationError from './ValidationError'

// モデルの代わりだと思って下さい。サンプル用。
type User = { name: string; age: number }
// DBの変わりだと思ってください。サンプル用。
const users = [{ name: 'hoge', age: 25 }, { name: 'fuga', age: 28 }, { name: 'piyo', age: 27 }]

@JsonController('/users')
export class UserController {
  
  @Get('/')
  getAll() {
    return users
  }

  /**
   * error()をgetOne()より下に書くと以下エラーが発生する。なんで？ｗ
   * {"name":"NotFoundError","stack":"Error: \n    at NotFoundError.HttpError [as constructor] (../src/http-error/HttpError.ts:19:22)\n    at new NotFoundError (../src/http-error/NotFoundError.ts:10:9)\n    at ExpressDriver.handleSuccess (../src/driver/express/ExpressDriver.ts:332:23)\n    at ../src/RoutingControllers.ts:160:45\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)"
   */
  @Get('/error')
  error() {
    throw new ValidationError(`Validation error.`);
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return users[id]
  }

  @Post('/')
  post(@Body() user: User) {
    users.push(user)
    return 'ok'
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() user: User) {
    users[id] = user
    return 'ok'
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    users.splice(id, 1)
    return 'ok'
  }


}