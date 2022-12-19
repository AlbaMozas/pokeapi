

let myArray = [];
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((responseJson) => {
        myArray = [...myArray, responseJson]
        console.log(myArray)
    })


const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  console.log(responseJson);
  myArray = [...myArray, responseJson];
};


let allPoke = 2;
const init = async () => {
    //await getPokemon(1);
    //await getPokemon(2);
    for (let i = allPoke; i < allPoke+150; i++) {
       await getPokemon(allPoke);
        
    }
    /*El awaitoperador se utiliza para esperar Promisey obtener 
    su valor de cumplimiento. Solo se puede usar dentro de una 
    función asíncrona o en el nivel superior de un módulo .*/

    console.log(myArray);
    for (const pokemon of myArray) {
      const myDiv$$ = document.querySelector(".pokemon");
      const newDiv$$ = document.createElement("div");
      newDiv$$.innerHTML = `
              <h4>${pokemon.name}</h4>
              <img src="${pokemon.sprites.front_default}" />
              `;
      myDiv$$.appendChild(newDiv$$);
    }
  };

  init();

