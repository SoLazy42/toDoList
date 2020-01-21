'use strict';

let app = new Vue({

    el: '#app',

    data: {
        list: '',
        lists: [],
    },
    methods: {
        addList: function() {
            this.lists.push(this.list)
            this.list = ''
        },
        removeList: function() {
            this.lists.pop()
        }
    }

})