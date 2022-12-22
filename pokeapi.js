//div para crear un hijo al imput de búsqueda
let divSearch$$ = document.querySelector(".search");

//nuevo array contenedor, tiene copia de los pokemon
let myArray = [];

//llamada a la web por los .name de los pokemon
const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  console.log(responseJson);
  myArray = [...myArray, responseJson];
};

//Imput de búsqueda 
 const drawInputSearch = () => {
  let input$$ = document.createElement("input");
  divSearch$$.appendChild(input$$);
  input$$.addEventListener("input", () =>
    searchNames(input$$.value, myArray)
  );
};

 const searchNames = (filtro, arrayPokemon) => {
  let filteredNames = arrayPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())  
  );
  drawPokemon(filteredNames);

};

//Dibujar los pokemon según propiedad/nombre
const drawPokemon = (pokemons) => {
  const myDiv$$ = document.querySelector(".pokemon");
  myDiv$$.innerHTML=''
  for (const pokemon of pokemons) {
    const newDiv$$ = document.createElement("div");
    newDiv$$.className = "character-card";
    
    newDiv$$.classList.add (pokemon.types[0].type.name);
    newDiv$$.innerHTML = `
            <img class=imagenPokemon src="${pokemon.sprites.other.dream_world.front_default}"/>
            <h4 class=name >${pokemon.name}</h4>
            <h4 class=tipe > Tipo${pokemon.types[0].type.name}</h4>
            <div>
            <button class=altura > Altura: ${pokemon.height} m</button>
            <button class=peso > Peso: ${pokemon.weight} kg</button>
            </div>
            `;
         
    myDiv$$.appendChild(newDiv$$);
  }


}
//El bucle para pintar todos los Pokemon
let allPoke = 1;
const init = async () => {
   divSearch$$.innerHTML = "";
   for (let i = allPoke; i < allPoke+155; i++) {
       await getPokemon(i);
   }
    /*El awaitoperador se utiliza para esperar Promise y obtener 
    su valor de cumplimiento. Solo se puede usar dentro de una 
    función asíncrona o en el nivel superior de un módulo .*/

  drawInputSearch();
  console.log(myArray);
    
  drawPokemon(myArray);
    
  };

  init();
   

