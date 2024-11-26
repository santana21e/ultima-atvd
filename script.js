// Dados para o gráfico de jogadores globais
const dataGlobal = [
    {
        x: ['Profissionais', 'Amadores', 'Base', 'Recreativos'],
        y: [20, 50, 15, 15], // Percentagens de jogadores no mundo
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399']
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Distribuição Global de Jogadores de Futebol (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categoria de Jogadores',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de jogadores no Colégio Morelli
const dataMorelli = [
    {
        x: ['Profissionais', 'Amadores', 'Base', 'Recreativos'],
        y: [5, 40, 50, 5], // Percentagens de jogadores no Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Distribuição de Jogadores no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categoria de Jogadores',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);

