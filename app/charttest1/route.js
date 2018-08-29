import Route from '@ember/routing/route';

export default Route.extend({
  model(){
  return {
    chartData: {
      labels: ['Day1', 'Day2', 'Day3'],
      series: [
        [5, 4, 8, 9, 10],
        [10, 2, 7, 6, 7],
        [8, 3, 6, 4, 5]
      ]
    }
  }
}
});
