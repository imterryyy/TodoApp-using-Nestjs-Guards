export class User{
    id: String;
    username: String;
    password: String;
    role: String

    constructor(id: String, username: String, password: String, role: String){
        this.id = id
        this.username = username
        this.password = password
        this.role = role
    }
}