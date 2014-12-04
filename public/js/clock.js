$(document).ready(function() {
    function Clock() {



    };

    Clock.prototype.update = function(){
      var datetime = new Date();
      this.hours = datetime.getHours();
      this.minutes = datetime.getMinutes();
      this.seconds = datetime.getSeconds();
    }

    Clock.prototype.runClock = function(){
      myInterval = setInterval(function () {this.update(); $("#clock").html("Current Time: " + this.hours + ":" + this.minutes + ":" + this.seconds);}.bind(this), 1000);
    };

    var pageclock = new Clock();
    pageclock.runClock();

});
