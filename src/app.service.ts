import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Antonio Bruno!';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      nome: "Antonio Bruno",
      email: "antonio.a.bruno@avanade.com",
      cpf: "905.856.748-68",
      telefone: "11993936883"
      
    }
    return objeto
  }
}
