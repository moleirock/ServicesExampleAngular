import { ProveedoresService } from './../services/proveedores.service';
import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
    clientes: any;
    proveedores: any[] = [];
    proveedor: any;
    showProveedor: boolean = false;
    showMasInfo: boolean = false;
  constructor(private clientesService:ClientesService,private proveedoresService:ProveedoresService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
    this.proveedores=this.proveedoresService.getProveedores();
  }
  mostrarInfoProveedor(cif: string) {
    this.showProveedor = true;
    this.proveedores.forEach(item => {
      if (item.cif == cif) {
        this.proveedor = item;
      }
    })
  }
  cerrarBox() {
    this.showProveedor = false;
    this.showMasInfo = false;
  }

  mostrarMasInfo() {
    this.showMasInfo = true;
  }
}
