import React from 'react';
import './Floorplan.scss';

var radius = 30;
var averageDiameter = 1.5 * radius;
var innerRadius = (Math.sqrt(3) / 2) * radius;
var innerDiameter = innerRadius * 2;

var boxHeight = window.innerHeight;
var boxWidth = window.innerWidth;
var totalCol = Math.ceil(boxWidth / innerDiameter);
var totalRow = Math.ceil(boxHeight / averageDiameter);
// find the center
var middleX = Math.floor(totalCol / 2) - 1;
var middleY = Math.floor(totalRow / 2);

var svg = document.getElementById('s');


class fpEditor extends React.Component {
    makePolygon = () => {
        return document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    }

    makeLine = () => {
        return document.createElementNS("http://www.w3.org/2000/svg", "line");
    }

    makeHexagonPolygon = (x, y) => {
        var polygon = makePolygon();
        polygon.setAttribute('points', hexPoints(x, y, radius));
        return polygon;
    }

    hexPoints = (xCoord, yCoord) => {
        var offset = (Math.sqrt(3) * radius) / 2;
        x = innerRadius + offset * xCoord * 2;
        y = radius + offset * yCoord * Math.sqrt(3);
        if (yCoord % 2 !== 0) x += offset;
        var points = [];
        for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
            var pointX, pointY;
            pointX = x + radius * Math.sin(theta);
            pointY = y + radius * Math.cos(theta);
            points.push(pointX + ',' + pointY);
        }
        return points.join(' ');
    }

    coordToHexCentre = (xCoord, yCoord) => {
        var offset = (Math.sqrt(3) * radius) / 2;
        x = innerRadius + offset * xCoord * 2;
        y = radius + offset * yCoord * Math.sqrt(3);
        if (yCoord % 2 !== 0) x += offset;
        return { x: x, y: y };
    }

    drawGrid = () => {
        var row, col;
        var revealed = [];
        revealed[middleY - 2] = {};
        revealed[middleY - 2][middleX - 1] = true;
        revealed[middleY - 2][middleX] = true;
        revealed[middleY - 2][middleX + 1] = true;

        revealed[middleY - 1] = {};
        revealed[middleY - 1][middleX - 2] = !(middleY % 2);
        revealed[middleY - 1][middleX - 1] = true;
        revealed[middleY - 1][middleX] = true;
        revealed[middleY - 1][middleX + 1] = true;
        revealed[middleY - 1][middleX + 2] = middleY % 2;

        revealed[middleY] = {};
        revealed[middleY][middleX - 2] = true;
        revealed[middleY][middleX - 1] = true;
        revealed[middleY][middleX] = true;
        revealed[middleY][middleX + 1] = true;
        revealed[middleY][middleX + 2] = true;

        revealed[middleY + 1] = {};
        revealed[middleY + 1][middleX - 2] = !(middleY % 2);
        revealed[middleY + 1][middleX - 1] = true;
        revealed[middleY + 1][middleX] = true;
        revealed[middleY + 1][middleX + 1] = true;
        revealed[middleY + 1][middleX + 2] = middleY % 2;

        revealed[middleY + 2] = {};
        revealed[middleY + 2][middleX - 1] = true;
        revealed[middleY + 2][middleX] = true;
        revealed[middleY + 2][middleX + 1] = true;

        revealed[middleY][middleX + 3] = true;
        revealed[middleY - 3] = {};
        revealed[middleY - 3][middleX + 1] = true;
        revealed[middleY - 4] = {};
        revealed[middleY - 4][middleX + 2] = true;
        revealed[middleY - 5] = {};
        revealed[middleY - 5][middleX + 2] = true;

        for (col = -1; col < totalCol; col++) {
            for (row = -1; row < totalRow; row++) {
                var polygon = makeHexagonPolygon(col, row);
                var className = 'map-grid ';

                if (revealed[row] && revealed[row][col]) {
                    className += 'map-grid--visible';
                }
                polygon.setAttribute('class', className);
                svg.appendChild(polygon);
            }
        }
    }

    drawCurrentPosition = () => {
        var current = makeHexagonPolygon(middleX, middleY);
        current.setAttribute('class', 'map-grid map-grid--current');
        current.addEventListener('click', function () {
            alert('cleeeek');
        })
        svg.appendChild(current);
    }

    drawHub = (x, y) => {
        var current = makeHexagonPolygon(x, y);
        current.setAttribute('class', 'map-grid map-grid--hub');
        current.addEventListener('click', function () {
            alert('cleeeek');
        })
        svg.appendChild(current);
    }

    drawSpoke = (startX, startY, endX, endY) => {
        var line = makeLine(),
            start = coordToHexCentre(startX, startY),
            end = coordToHexCentre(endX, endY);
        line.setAttribute('class', 'spoke');
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', end.x);
        line.setAttribute('y2', end.y);
        svg.appendChild(line);
    }

    svg.setAttribute('width', boxWidth + 'px');
    svg.setAttribute('height', boxHeight + 'px');

    drawGrid();
    drawSpoke(middleX, middleY, middleX + 3, middleY);
    drawSpoke(middleX, middleY, middleX + 2, middleY - 5);
    drawSpoke(middleX - 2, middleY + 1, middleX - 1, middleY - 1);

    drawHub(middleX + 3, middleY);
    drawHub(middleX - 1, middleY - 1);
    drawHub(middleX - 2, middleY + 1);
    drawHub(middleX + 2, middleY - 5);
    drawCurrentPosition();
}