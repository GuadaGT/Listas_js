const listaCompra = ["Tofu", "Arroz", "Espinacas", "Peras", "Garbanzos"];
console.log(listaCompra);

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);

const peliculasPreferidas = 
[
  { titulo: "Pesadilla antes de navidad", director: "Henry Selick", fecha: 1992 },
  { titulo: "Star Wars Episodio III: La venganza de los sith", director: "George Lucas", fecha: 2005 },
  { titulo: "Big Fish", director: "Tim Burton", fecha: 2003 }
];

const posteriores2010 = peliculasPreferidas.filter(pelicula => pelicula.fecha > 2010);
console.log(posteriores2010);

const directores = peliculasPreferidas.map(pelicula => pelicula.director);
console.log(directores);

const titulos = peliculasPreferidas.map(pelicula => pelicula.titulo);
console.log(titulos);

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

const TitulosDirectores = [...directores, ...titulos];
console.log(TitulosDirectores);