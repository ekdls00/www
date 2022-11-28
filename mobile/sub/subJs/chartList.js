$(document).ready(function () {
    let ctx1 = $('#myChart1');
    let ctx2 = $('#myChart2');
    let ctx3 = $('#myChart3');
    // ctx1.height(400);
    // ctx2.height(400);
    // ctx3.height(400);

    const data1 = {
        labels: ["매출액"],
        datasets: [
          {
            label: "2021",
            data: [885257],
            backgroundColor: "#877669",
            barPercentage: 0.5,
          },
          {
            label: "2020",
            data: [807665],
            backgroundColor: "#666",
            barPercentage: 0.5,
          },
          {
            label: "2019",
            data: [855926],
            backgroundColor: "#999",
            barPercentage: 0.5,
          },
        ],
    };

    const data2 = {
        labels: ["영업이익"],
        datasets: [
          {
            label: "2021",
            data: [15459],
            backgroundColor: "#877669",
            barPercentage: 0.5,
          },
          {
            label: "2020",
            data: [7333],
            backgroundColor: "#666",
            barPercentage: 0.5,
          },
          {
            label: "2019",
            data: [20165],
            backgroundColor: "#999",
            barPercentage: 0.5,
          },
        ],
    };
    
    const data3 = {
        labels: ["부채비율"],
        datasets: [
          {
            label: "2021",
            data: [92.1],
            backgroundColor: "#877669",
            barPercentage: 0.5,
          },
          {
            label: "2020",
            data: [123.4],
            backgroundColor: "#666",
            barPercentage: 0.5,
          },
          {
            label: "2019",
            data: [86.2],
            backgroundColor: "#999",
            barPercentage: 0.5,
          },
        ],
    };

    const config1 = {
        type: 'bar',
        data: data1,
        options: {
            interaction: {
              mode: "nearest",
            },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 10,
                    family: "Noto Sans KR, sans-serif",
                  },
                },
              },
            },
          },
        };
      

    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            interaction: {
              mode: "nearest",
            },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 10,
                    family: "Noto Sans KR, sans-serif",
                  },
                },
              },
            },
        },
    };


    const config3 = {
        type: 'bar',
        data: data3,
        options: {
            interaction: {
              mode: "nearest",
            },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: {
                    size: 10,
                    family: "Noto Sans KR, sans-serif",
                  },
                },
              },
            },
        },
    };

    const myChart1 = new Chart(
        document.getElementById('myChart1'), //차트 아이디 맞추기
        config1
    );
    const myChart2 = new Chart(
        document.getElementById('myChart2'), //차트 아이디 맞추기
        config2
    );
    const myChart3 = new Chart(
        document.getElementById('myChart3'), //차트 아이디 맞추기
        config3
    );
}); 

