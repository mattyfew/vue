new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                console.log();
                return alert('Clicked!')
            },
            storeVal: function(e) {
                this.value = e.target.value
            }
        }
    });
