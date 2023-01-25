import { Component, OnInit, Input } from '@angular/core';
import { ProveedoresService } from '../services/proveedores.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-etiquetas',
    templateUrl: './etiquetas.component.html',
    styleUrls: ['./etiquetas.component.css'],
})
export class EtiquetasComponent implements OnInit {
    proveedores: any[] = [];
    proveedor: any;
    @Input() cifProveedor: string = '';
    constructor(private proveedoresService: ProveedoresService) {
        this.downloadPDF();
    }
    public downloadPDF() {
        const DATA = document.getElementById('htmlData');
        const doc = new jsPDF('p', 'pt', 'a4');
        const options = {
            background: 'white',
            scale: 3,
        };
        html2canvas(DATA, options)
            .then((canvas) => {
                const img = canvas.toDataURL('image/PNG');

                // Add image Canvas to PDF
                const bufferX = 15;
                const bufferY = 15;
                const imgProps = (doc as any).getImageProperties(img);
                const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                doc.addImage(
                    img,
                    'PNG',
                    bufferX,
                    bufferY,
                    pdfWidth,
                    pdfHeight,
                    undefined,
                    'FAST'
                );
                return doc;
            })
            .then((docResult) => {
                docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
            });
    }

    ngOnInit(): void {
        this.proveedores = this.proveedoresService.getProveedores();

        this.proveedores.forEach((proveedor) => {
            if (proveedor.cif == this.cifProveedor) {
                this.proveedor = proveedor;
            }
        });
    }
}
