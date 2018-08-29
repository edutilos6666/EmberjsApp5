import Controller from '@ember/controller';

export default Controller.extend({
  options:{
  axisX: {
    labelInterpolationFnc: function(value) {
      return 'Calendar Week ' + value;
    }
  }
},
responsiveOptions: [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'Week ' + value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'W' + value;
      }
    }
  }]
]
});
