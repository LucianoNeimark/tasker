<template>
	<div id="rating">
		<button v-on:click="rating1">1 Estrella</button>
		<button v-on:click="rating2">2 Estrellas</button>
		<button v-on:click="rating3">3 Estrellas</button>
		<button v-on:click="rating4">4 Estrellas</button>
		<button v-on:click="rating5">5 Estrellas</button>
		<br>
		<br>
		<br>
		<span>El ratign es: {{ ratingValue }}</span>
		<button v-on:click="porcentaje">porcentaje</button>
		<button v-on:click="ultimoVal">Suma de val </button>
		<ol>
			<li v-for="rates in rateList"> {{ rates }} </li>
		</ol>
	</div>
</template>

<script>
	export default {
  name: 'rating', // nombre del componente
  data () {
    return {
      ratingValue: 0, //Variables para el componente
      //rateList: [], Uso para testeo
      ultimoRate: 3, // Valos de la base de datos de robet
      valorSumado: 0 // Valor de base de datos + Valor que pone el usuario
    }
  },
  methods: 
  {
  	ultimoVal()
  	{
  		this.valorSumado = this.ultimoRate + this.ratingValue
  		alert(this.valorSumado)

  	}
  	,
  	porcentaje()
  	{
  		this.valorSumado = this.valorSumado/2
  		alert(this.valorSumado)
  	}
   	,
     rating1()
     {
     	this.ratingValue = 1
     	//this.rateList.push(1)
     }
     ,
     rating2()
     {
     	this.ratingValue = 2
     	//this.rateList.push(2)
     	
     }
     ,
     rating3()
     {
     	this.ratingValue = 3
     	//this.rateList.push(3)
     	
     }
     ,
     rating4()
     {
     	this.ratingValue = 4
     	//this.rateList.push(4)
     	
     }
     ,
     rating5()
     {
     	this.ratingValue = 5
     	//this.rateList.push(5)
     	//this.i++
     }
  }
}
</script>

<style>
	
</style>