import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"
let averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;
let descripcionCard: HTMLElement = document.getElementById('tarjeta')!;

renderCoursesInTable(dataCourses);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataCourses)}`

function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td><a href="#" class="serie-link">${c.titulo}</a></td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    coursesTbody.appendChild(trElement);
    
    const serieLink = trElement.querySelector('.serie-link');
    if (serieLink) {
      serieLink.addEventListener('click', () => {
        renderDetailsInCard(c);
      });
    }
  });
}

function getAverageSeasons(courses: Course[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    courses.forEach((course) => totalSeasons = totalSeasons + course.temporadas);
    courses.forEach((course) => totalSeries = course.id);
    return Number((totalSeasons/totalSeries).toFixed(2));
  }

function renderDetailsInCard(course: Course): void {
    descripcionCard.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${course.imagen}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${course.titulo}</h5>
      <p class="card-text">${course.descripcion}</p>
      <a href="${course.link}" id="miBoton" class="btn btn-primary">Ver trailer</a>
    </div>
  </div>`;
}