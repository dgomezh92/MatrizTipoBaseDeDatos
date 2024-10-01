let chartInstance = null;  // Variable para almacenar el gráfico actual

document.getElementById("evaluationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener las respuestas
    const responses = {
        dataModel: document.getElementById("dataModel").value,
        scalability: document.getElementById("scalability").value,
        transactions: document.getElementById("transactions").value,
        readWriteLoad: document.getElementById("readWriteLoad").value,
        dataGrowth: document.getElementById("dataGrowth").value,
        schemaFlexibility: document.getElementById("schemaFlexibility").value,
        dataRelations: document.getElementById("dataRelations").value,
        performance: document.getElementById("performance").value,
        security: document.getElementById("security").value,
        reporting: document.getElementById("reporting").value,
        communitySupport: document.getElementById("communitySupport").value,
        cost: document.getElementById("cost").value,
        integrationNeeds: document.getElementById("integrationNeeds").value,
        futureGrowth: document.getElementById("futureGrowth").value,
        teamSkills: document.getElementById("teamSkills").value,
    };

    // Validaciones básicas
    for (const [question, answer] of Object.entries(responses)) {
        if (!answer) {
            alert(`Por favor, selecciona una respuesta para la pregunta: ${question}`);
            return;
        }
    }

    // Calcular puntajes
    let relationalScore = 0;
    let nosqlScore = 0;

    const rules = {
        sql: ['dataModel', 'transactions', 'dataRelations', 'performance', 'security', 'reporting', 'communitySupport', 'integrationNeeds', 'teamSkills'],
        nosql: ['scalability', 'readWriteLoad', 'dataGrowth', 'schemaFlexibility', 'cost', 'futureGrowth']
    };

    rules.sql.forEach((item) => { if (responses[item] === "Sí") relationalScore++; });
    rules.nosql.forEach((item) => { if (responses[item] === "Sí") nosqlScore++; });

    // Mostrar resultados en el div
    // const resultDiv = document.getElementById("result");


    // Destruir gráfico anterior si existe
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Generar gráfico con Chart.js
    const ctx = document.getElementById('chartResult').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['SQL', 'NoSQL'],
            datasets: [{
                label: 'Resultados',
                data: [relationalScore, nosqlScore],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Esperar a que el gráfico se renderice antes de agregarlo al PDF
    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text("Resultados de Evaluación", 10, 10);

        // Agregar preguntas y respuestas al PDF
        let y = 20;
        for (const [question, answer] of Object.entries(responses)) {
            doc.text(`${question}: ${answer}`, 10, y);
            y += 10;
        }

        // Agregar puntajes al PDF
        doc.text(`Score Relacional (SQL): ${relationalScore}`, 10, y);
        y += 10;
        doc.text(`Score NoSQL: ${nosqlScore}`, 10, y);

        // Convertir el gráfico a imagen y agregarlo al PDF
        const chartCanvas = document.getElementById('chartResult');
        const chartDataURL = chartCanvas.toDataURL("image/png");  // Convertir gráfico a Data URL
        doc.addImage(chartDataURL, 'PNG', 10, y + 10, 180, 80);  // Agregar imagen al PDF

        // Descargar PDF
        doc.save("resultados_evaluacion.pdf");
    }, 500); // Esperar 500ms para asegurarse de que el gráfico está listo
});
