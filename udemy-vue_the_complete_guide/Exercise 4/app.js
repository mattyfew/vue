new Vue({
  el: '#exercise',
  data: {
      effecter: false,
      userClass: 'big',
      userClass2: 'merp',
      ourBool: false,
      userStyles: '',
      progress: 10
  },
  computed: {
      myStyle: function() {
          return {
              width: this.userStyles + 'px'
          }
      },
      myProgress: function() {
          return {
              width: this.progress + 'px'
          }
      }
  },
  methods: {
    startProgress: function() {
        const vm = this
        setInterval(function(){
            vm.progress += 10
            console.log(vm.progress);
        }, 1000)
    },
    startEffect: function() {
        var vm = this
        setInterval(function() {
            vm.effecter = !vm.effecter
        },2000)
    }
  }
});
