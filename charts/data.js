const data = {
  '2021-04-22': { height: 51.0, weight: 3.28, head: 0 },
  '2021-04-24': { height: 0, weight: 3.29, head: 34.0 },
  '2021-04-29': { height: 0, weight: 3.55, head: 0 },
  '2021-05-01': { height: 0, weight: 3.78, head: 0 },
  '2021-05-03': { height: 0, weight: 3.9, head: 0 },
  '2021-05-05': { height: 54.0, weight: 4.0, head: 37 },
  '2021-05-07': { height: 0, weight: 4.18, head: 0 },
  '2021-05-13': { height: 0, weight: 4.57, head: 0 },
  '2021-05-15': { height: 55.0, weight: 4.63, head: 0 },
  '2021-05-17': { height: 0, weight: 4.71, head: 0 },
  '2021-05-11': { height: 55.0, weight: 4.47, head: 0 },
  '2021-05-20': { height: 58.0, weight: 4.92, head: 0 },
  '2021-05-26': { height: 0, weight: 5.39, head: 0 },
  '2021-05-27': { height: 59.0, weight: 5.3, head: 0 },
  '2021-05-29': { height: 0, weight: 5.49, head: 0 },
  '2021-06-24': { height: 63.0, weight: 6.8, head: 40.5 }
};

const draw = (key) => {
  const myChart = echarts.init(document.getElementById('main'));
  let flag = 0;

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: Object.keys(data)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: Object.values(data).map((item) => {
          if (item[key] !== 0) {
            flag = item;
          }

          return flag[key];
        }),
        type: 'line'
      }
    ]
  };

  myChart.setOption(option);
};
