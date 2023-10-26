import { dataCourses } from './dataCourses.js';
var coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
var averageSeasonsElm = document.getElementById('average-seasons');
var descripcionCard = document.getElementById('tarjeta');
renderCoursesInTable(dataCourses);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataCourses));
function renderCoursesInTable(courses) {
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td><a href=\"#\" class=\"serie-link\">").concat(c.titulo, "</a></td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
        var serieLink = trElement.querySelector('.serie-link');
        if (serieLink) {
            serieLink.addEventListener('click', function () {
                renderDetailsInCard(c);
            });
        }
    });
}
function getAverageSeasons(courses) {
    var totalSeasons = 0;
    var totalSeries = 0;
    courses.forEach(function (course) { return totalSeasons = totalSeasons + course.temporadas; });
    courses.forEach(function (course) { return totalSeries = course.id; });
    return Number((totalSeasons / totalSeries).toFixed(2));
}
function renderDetailsInCard(course) {
    descripcionCard.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"".concat(course.imagen, "\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(course.titulo, "</h5>\n      <p class=\"card-text\">").concat(course.descripcion, "</p>\n      <a href=\"").concat(course.link, "\" id=\"miBoton\" class=\"btn btn-primary\">Ver trailer</a>\n    </div>\n  </div>");
}
