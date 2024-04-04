var grantsJSONUrl = 'scripts/grants.json?v=1.2';

var grants = new Vue({
  el: '#vueGrants',

  data: {
    grants: null
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
      var self = this;
      $.get( grantsJSONUrl, function(data){
        self.grants = data.grants;
      });
    }
  }

});
