function heroina (nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo; 
    
    this.atacar = function() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreira" :
          ataque = "espada" ;
          break;
        case "monge" :
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken" ;
      }
      console.log("A " + this.tipo + " atacou usando " + ataque);
    }
}
  
  const Lagherta = new heroina("Lagherta", 28, "guerreira");
  Lagherta.atacar();
