import { Carrusel } from "./lib/carrusel.js";

//container
const carruselContainer = document.getElementById("carrusels");

//imagenes url from internet or your computer
const arr1 = [
  "https://st1.uvnimg.com/dims4/default/0102b2f/2147483647/resize/1093x820%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg",
  "https://www.elcarrocolombiano.com/wp-content/uploads/2022/02/20220211-MARCAS-CARROS-MAS-CONFIABLES-2022-PORTADA.jpg",
  "https://www.elcarrocolombiano.com/wp-content/uploads/2020/02/20200207-HYUNDAI-SONATA-HYBRID-2020-02-750x518.jpg",
  "https://www.elcarrocolombiano.com/wp-content/uploads/2020/07/1-14-1-750x518.jpg",
  "https://www.elcarrocolombiano.com/wp-content/uploads/2023/01/20230110-VENTAS-DE-AUTOS-DE-LUJO-2022-PORTADA.jpg",
];

new Carrusel(carruselContainer, arr1);
new Carrusel(carruselContainer, arr1, 1);
new Carrusel(carruselContainer, arr1, 2);
new Carrusel(carruselContainer, arr1, 20);
