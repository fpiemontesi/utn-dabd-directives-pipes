export class Auto {
  nombre: string = '';
  visible: boolean = true;
  activo: boolean = true;
  fecha: Date = new Date();

  constructor(nombre: string, visible: boolean, activo: boolean) {
    this.nombre = nombre;
    this.visible = visible;
    this.activo = activo;
  }
}
