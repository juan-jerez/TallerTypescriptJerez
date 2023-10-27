import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var averageSeasonsElm = document.getElementById('average-seasons');
var descripcionCard = document.getElementById('tarjeta');
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td><a href=\"#\" class=\"serie-link\">").concat(s.titulo, "</a></td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        var serieLink = trElement.querySelector('.serie-link');
        if (serieLink) {
            serieLink.addEventListener('click', function () {
                renderDetailsInCard(s);
            });
        }
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (course) { return totalSeasons = totalSeasons + course.temporadas; });
    series.forEach(function (course) { return totalSeries = course.id; });
    return Number((totalSeasons / totalSeries).toFixed(2));
}
function renderDetailsInCard(course) {
    descripcionCard.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"".concat(course.imagen, "\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(course.titulo, "</h5>\n      <p class=\"card-text\">").concat(course.descripcion, "</p>\n      <a href=\"").concat(course.link, "\" id=\"miBoton\" class=\"btn btn-primary\">Ver trailer</a>\n    </div>\n  </div>");
}
