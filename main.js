// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化位置分布图表
    const locationCtx = document.getElementById('locationChart').getContext('2d');
    const locationChart = new Chart(locationCtx, {
        type: 'bar',
        data: {
            labels: ['城阳区', '黄岛区', '即墨区', '胶州市', '莱西市', '平度市'],
            datasets: [{
                label: '科技小院数量',
                data: [12, 8, 15, 7, 5, 9],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.6)',
                    'rgba(255, 152, 0, 0.6)',
                    'rgba(33, 150, 243, 0.6)',
                    'rgba(156, 39, 176, 0.6)',
                    'rgba(255, 87, 34, 0.6)',
                    'rgba(0, 188, 212, 0.6)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(33, 150, 243, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(255, 87, 34, 1)',
                    'rgba(0, 188, 212, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '数量'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '青岛市区县'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `科技小院数量: ${context.raw}个`;
                        }
                    }
                }
            }
        }
    });

    // 初始化产业分布图表
    const industryCtx = document.getElementById('industryChart').getContext('2d');
    const industryChart = new Chart(industryCtx, {
        type: 'pie',
        data: {
            labels: ['海参', '马铃薯', '葡萄种苗', '其他作物', '畜牧业', '渔业'],
            datasets: [{
                label: '科技小院数量',
                data: [15, 12, 10, 8, 6, 4],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.6)',
                    'rgba(255, 152, 0, 0.6)',
                    'rgba(33, 150, 243, 0.6)',
                    'rgba(156, 39, 176, 0.6)',
                    'rgba(255, 87, 34, 0.6)',
                    'rgba(0, 188, 212, 0.6)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(33, 150, 243, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(255, 87, 34, 1)',
                    'rgba(0, 188, 212, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}个`;
                        }
                    }
                }
            }
        }
    });

    // 添加图表交互示例 - 切换图表类型
    const chartTypes = ['bar', 'pie', 'line'];
    let currentTypeIndex = 0;

    document.getElementById('locationChart').parentElement.addEventListener('dblclick', function() {
        currentTypeIndex = (currentTypeIndex + 1) % chartTypes.length;
        locationChart.config.type = chartTypes[currentTypeIndex];
        locationChart.update();
    });

    // 为产业分布图表添加交互功能
    let industryTypeIndex = 0;
    const industryChartTypes = ['pie', 'doughnut', 'polarArea'];

    document.getElementById('industryChart').parentElement.addEventListener('dblclick', function() {
        industryTypeIndex = (industryTypeIndex + 1) % industryChartTypes.length;
        industryChart.config.type = industryChartTypes[industryTypeIndex];
        industryChart.update();
    });
});