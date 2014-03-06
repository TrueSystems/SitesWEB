// SeViR Simple Horizontal Accordion @2007
// http://letmehaveblog.blogspot.com
jQuery.fn.extend({
  haccordion: function(params){
    var jQ = jQuery;
    var params = jQ.extend({
      speed: 500,
      headerclass: "header",
      contentclass: "content",
      contentwidth: 153
    },params);
    return this.each(function(){
      jQ("."+params.headerclass,this).hover(function(){
        var p = jQ(this).parent()[0];
        if (p.opened != "undefined"){
          jQ(p.opened).next("div."+params.contentclass).animate({
            width: "0px"
          },params.speed);
        }
        p.opened = this;
        jQ(this).next("div."+params.contentclass).animate({
          width: params.contentwidth + "px"
        }, params.speed);
      });
    });
  }
});