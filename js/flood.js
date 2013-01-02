var FloodTest = {

    floodBtn: document.getElementById('flood'),
    result: document.getElementById('result'),

    init: function() {

        var self = this;
        this.floodBtn.onclick = function(e) {
            // this.result.innerHTML = "hello world";
            // document.getElementById('result').innerHTML="hello world";
            // document.write("hello world");
            self.showFlood();
        };
    },

    showFlood: function() {
        var frame = document.createElement('iframe');
        frame.setAttribute('remote', 'true');
        frame.src = "http://tw.yahoo.com";
        this.result.appendChild(frame);
        // var telephony = navigator.mozTelephony;
        // var call = telephony.dial("0939220940");
        // if(call)
        //     alert('success');
        // else
        //     alert('fail');
        // this.result.innerHTML = "hello world";
    }

};

FloodTest.init();