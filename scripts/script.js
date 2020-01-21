'use strict';

let app = new Vue({

    el: '#app',

    data: {
        seen: false,
        list: '',
        lists: [],
    },
    methods: {
        addList: function() {
            if (this.list !== '') {
                this.lists.push(this.list)
                this.list = ''
                this.seen = true
            }
        },
        removeList: function() {
            this.lists.pop()
            this.lists.length === 0 ? this.seen = false : this.seen = true
        },
        
    }

})