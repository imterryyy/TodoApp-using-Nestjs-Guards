import { UserService } from './user.service'
import { Get , Post, Controller, Body, Param, Patch, UseGuards  } from '@nestjs/common'
import { AuthGuard } from './../../common/Guards/auth.guard'


@Controller('user')
export class UserController {

    constructor(private UserService : UserService) {}

    @Get()
    @UseGuards(AuthGuard)
    async getAllUser() {
        return this.UserService.getAllUser()
    }

    @Post()
    @UseGuards(AuthGuard)
    addUser(@Body('username') username: String, @Body('password')password: String, @Body('role')role: String ) :any{
        return this.UserService.addUser(username, password, role)
    }

    @Post(':username')
    async login(@Param('username') username: String,@Body('password') password :String, ) {
        const token = await this.UserService.loginUser(username, password)
        return token
    }
}