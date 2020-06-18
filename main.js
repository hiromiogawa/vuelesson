var app = new Vue({
  el: "#example",
  data: {
    count: 0
  },
  computed: {
    date: function () {
      return new Date().toLocaleString();
    }
  },
  methods: {
    countUp: function () {
      this.count += 1;
    },
    getDate: function () {
      return new Date().toLocaleString();
    }
  }
});
