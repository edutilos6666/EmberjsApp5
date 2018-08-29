import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      chartData:{
  labels: ['1', '2', '3', '4', '5', '6'],
  series: [
    {
      data: [1, 2, 3, 5, 8, 13]
    }
  ]
}
    }
  }
});
