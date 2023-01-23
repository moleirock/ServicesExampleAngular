import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../services/proveedores.service';

@Component({
    selector: 'app-proveedores',
    templateUrl: './proveedores.component.html',
    styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
    proveedores: any;
    cif: string = '';
    showEtiquetas: boolean = false;
    constructor(private proveedoresService: ProveedoresService) {}

    ngOnInit(): void {
        this.proveedores = this.proveedoresService.getProveedores();
    }

    mostrarEtiquetas(cif: string) {
        this.showEtiquetas = true;
        this.cif = cif;
    }
    cerrarBox(){
        this.showEtiquetas=false;
    }
}
