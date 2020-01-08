import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
import { Todo } from './../../entities/todo.entity'

@Injectable()
export class TodoService {
    private todos =[
        {
            id: '1',
            name: 'learn reactjs'
        },
        {
            id: '2',
            name: 'learn nestjs'
        },
    ]

    private randomString(length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
        if (! length) {
            length = Math.floor(Math.random() * chars.length);
        }
    
        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    async addTodo(name) :Promise<any>{
        const newTodo = {
            id : this.randomString(10),
            name
        }
        this.todos.push(newTodo)
        return newTodo
    }

    async getAllTodo() :Promise<any>{
        return [...this.todos]
    }

    async deleteTodo(id) : Promise<any>{
        for (let index = 0; index < this.todos.length; index++) {
            if(id == this.todos[index].id){
                this.todos.splice(index,1)
                return id
            }
        }
        return null
    }

    async editTodo(id, newName): Promise<any>{
        for (let index = 0; index < this.todos.length; index++) {
            if(id == this.todos[index].id){
                this.todos[index].name = newName
                return id
            }
        }
        return null
    }
}
