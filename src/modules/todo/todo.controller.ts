import { TodoService } from './todo.service'
import { Get, Post, Controller, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common'
import { AuthGuard } from './../../common/Guards/auth.guard'

@Controller('todo')
export class TodoController {

    constructor(private TodoService: TodoService) { }

    @Get()
    async getAllTodo() {
        return this.TodoService.getAllTodo()
    }

    @Post()
    @UseGuards(AuthGuard)
    async addTodo(@Body('name') name: String) {
        return this.TodoService.addTodo(name)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteTodo(@Param('id') id: String ){
        const idDelete = await this.TodoService.deleteTodo(id)
        return idDelete
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    async editTodo(@Param('id') id: String,@Body('newName') newName) {
        const idEdit = await this.TodoService.editTodo(id, newName)
        return idEdit
    }
}