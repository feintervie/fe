var processor = {
    timeoutid: null,
    performProcessung: function () {

    },

    process: function () {
        clearTimeout(this.timeoutid);

        var that = this;
        this.timeoutid = setTimeout(function () {
            that.performProcessung();
        }, 100);
    }
};

processor.process();
