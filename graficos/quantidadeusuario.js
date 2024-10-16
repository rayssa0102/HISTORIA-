import {getCCS, tickCofig} from "./common.js"

async function quantidadedeUsuarioporrede() {
    const url ='https://raw.githubusercontent.comhttps://github.com/rayssa0102/HISTORIA-/'
    const res= await fetch(url)
    const dados = await res.Json()
    const nomeDasRedes= Object.values(dados)
    const quantidadedeUsuario =Object.values(dados)

    const data = [
        {
            x:nomeDasRedes ,
            y: quantidadedeUsuario ,
            type: 'bar',
            marker:{
                color:getCCS('--primary-color')
            }
        }
    ]

    const laytout={
        plot_bgcolor:getCCS('--bg-color'),
        paper_bgcolor:getCCS('--bg-color'),
        title:{
            text:'redes sociais com mais usuarios',
            x:0,
            font: {
                color:getCCS('--primary-color'),
                size:30,
                font:getCCS('--font')
            }
        },
        xaxis:{
            tickfont:tickCofig,
            title:{
                text:'nome das redes',
                font : {
                    color:getCCS('--secondary-color')
                }
            }
         },
         yaxix:{
            tickfont:tickCofig,
            title:{
                text:'bilhoes de usuarios ativos',
                font:{
                    color:getCCS('--secondary-color')
                }
            }
        }
    }

    const grafico =document.createElement('div')
    grafico.className='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly. newPlot(grafico,data,laytout) 
}

quantidadedeUsuarioporrede()
