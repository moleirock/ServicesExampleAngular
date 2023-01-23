import { Component, OnInit,Input } from '@angular/core';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {

  proveedores:any[]=[];
  proveedor:any;
    @Input() cifProveedor:string="";
  constructor(private proveedoresService:ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores=this.proveedoresService.getProveedores();

    this.proveedores.forEach(proveedor => {
      if(proveedor.cif==this.cifProveedor){
        this.proveedor=proveedor;
      }
    });
  }

}
