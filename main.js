const times = [
    {
      nome: "Flamengo",
      estado: "RJ",
      titulos: 8,
      valorElenco: 1200000000.00
    },
    {
      nome: "Palmeiras",
      estado: "SP",
      titulos: 12,
      valorElenco: 1100000000.00
    },
    {
      nome: "Corinthians",
      estado: "SP",
      titulos: 7,
      valorElenco: 600000000.00
    },
    {
      nome: "São Paulo",
      estado: "SP",
      titulos: 6,
      valorElenco: 550000000.00
    },
    {
      nome: "Grêmio",
      estado: "RS",
      titulos: 2,
      valorElenco: 400000000.00
    },
    {
      nome: "Internacional",
      estado: "RS",
      titulos: 3,
      valorElenco: 420000000.00
    },
    {
      nome: "Cruzeiro",
      estado: "MG",
      titulos: 4,
      valorElenco: 450000000.00
    },
    {
      nome: "Atlético Mineiro",
      estado: "MG",
      titulos: 3,
      valorElenco: 500000000.00
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let time of times){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${time.nome}</td>
        <td>${time.estado}</td>
        <td>${time.titulos}</td>
        <td class="preco">${time.valorElenco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }
