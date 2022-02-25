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
      nacionalidade: "Brasileira",
      sexo: "M",
      telefone: "11993936883",
      celular: "993933999"
    }
    return objeto
  }
}
