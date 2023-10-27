import { Serie } from './sertie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
let averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;
let descripcionCard: HTMLElement = document.getElementById('tarjeta')!;

renderSeriesInTable(dataSeries);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td><a href="#" class="serie-link">${s.titulo}</a></td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
    
    const serieLink = trElement.querySelector('.serie-link');
    if (serieLink) {
      serieLink.addEventListener('click', () => {
        renderDetailsInCard(s);
      });
    }
  });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((course) => totalSeasons = totalSeasons + course.temporadas);
    series.forEach((course) => totalSeries = course.id);
    return Number((totalSeasons/totalSeries).toFixed(2));
  }

function renderDetailsInCard(course: Serie): void {
    descripcionCard.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${course.imagen}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${course.titulo}</h5>
      <p class="card-text">${course.descripcion}</p>
      <a href="${course.link}" id="miBoton" class="btn btn-primary">Ver trailer</a>
    </div>
  </div>`;
}