import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
    clientes: any = [
        {
            CodCliente: 1,
            Nombre: 'Victor García',
            Direccion: 'Calle de la Luna, 1',
            correo: 'victor@gmail.com',
            NIF_proveedor_energia: 'B12345678',
        },
        {
            CodCliente: 2,
            Nombre: 'Pepa García',
            Direccion: 'Calle de la Luna, 2',
            correo: 'pepa@gmail.com',
            NIF_proveedor_energia: 'B87654321'
        }
    ];

    getClientes() {
        return this.clientes;
    }

  constructor() { }
}
