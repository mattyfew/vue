new Vue({
    el: '#exercise',
    data: {
        name: 'Matt',
        age: 29,
        link: 'https://lh3.googleusercontent.com/8gKuC9hu8S4W6iYIHL1WKq1KJHEiv0dwf_7vJM3EcC_EC9-I0n-3iFDE8lXWLdIXNPY=w170'
    },
    methods: {
        getRandomNumber: function() {
            return Math.random() * 100
        }
    }
})
