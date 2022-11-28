$(document).ready(function () {
    let ctx1 = $('#myChart1');
    let ctx2 = $('#myChart2');
    let ctx3 = $('#myChart3');
    ctx1.height(400);
    ctx2.height(400);
    ctx3.height(400);

    const data1 = {
        labels:  [ '2019','2020 ','2021'],
        datasets: [{
            data: [885257, 807665, 855926], //최대값에 맞춰서 그래프가 변동됨
            backgroundColor: [
                '#877669',
                '#666',
                '#999'
            ],
             borderColor: [
                '#ccc',
                '#ccc',
                '#ccc'
            ],
            borderWidth: 1
        }]
    };
    const data2 = {
        labels:  [ '2019','2020 ','2021'],
        datasets: [{
            label: 'My First Dataset',
            data: [15459, 7333, 20165], //최대값에 맞춰서 그래프가 변동됨
            backgroundColor: [
                '#877669',
                '#666',
                '#999'
            ],
             borderColor: [
                '#ccc',
                '#ccc',
                '#ccc'
            ],
        }]
    };
    const data3 = {
        labels:  [ '2019','2020 ','2021'],
        datasets: [{
            data: [92.1, 123.4, 86.2], //최대값에 맞춰서 그래프가 변동됨
            backgroundColor: [
                '#877669',
                '#666',
                '#999'
            ],
             borderColor: [
                '#ccc',
                '#ccc',
                '#ccc'
            ],
        }]
    };
            
    const config1 = {
        type: 'bar',
        data: data1,
        label: 'fsdfdsfdsfsdfds',
        options: {
			plugins:{
                legend:{
                    display: false
                }
            },
            responsive:false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            plugins:{
                legend:{
                    display: false
                }
            },
            responsive:false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    const config3 = {
        type: 'bar',
        data: data3,
        options: {
            plugins:{
                legend:{
                    display: false
                }
            },
            responsive:false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
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

