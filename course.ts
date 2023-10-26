export class Course {
    id: number;
    titulo: string;
    canal: string;
    temporadas: number;
    imagen: string;
    descripcion: string;
    link: string;
  
    constructor(id: number, titulo: string, canal: string, temporadas: number, imagen: string, descripcion: string, link: string) {
      this.id = id;
      this.titulo = titulo;
      this.canal = canal;
      this.temporadas = temporadas;
      this.imagen = imagen;
      this.descripcion = descripcion;
      this.link = link;
    }
  }