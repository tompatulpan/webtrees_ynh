(function(d){function a(e){e.width=e.width;e.height=e.height;e.style.backgroundImage="url("+e.src+")";e.style.backgroundRepeat="no-repeat";e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="}var c={zoom:0.1},b;void 0!==document.onmousewheel?b="onmousewheel":void 0!==document.onwheel&&(b="onwheel");d.fn.wheelzoom=function(e){var f=d.extend({},c,e);return this[0]&&b&&"backgroundSize" in this[0].style?this.each(function(){function i(){function h(){u=n;x=m;r=s;q=o;A()}function A(){r>s?r=s:r<n+s-u&&(r=n+s-u);q>o?q=o:q<m+o-x&&(q=m+o-x);j.style.backgroundSize=u+"px "+x+"px";j.style.backgroundPosition=r+"px "+q+"px"}var n=g.width(),m=g.height(),z=g.innerWidth(),y=g.innerHeight(),s=(z-n)/2,o=(y-m)/2,u=n,x=m,r=s,q=o;a(j);g.css({backgroundSize:n+"px "+m+"px",backgroundPosition:s+"px "+o+"px"}).bind("wheelzoom.reset",h);j[b]=function(k){var v=0;k.preventDefault();k.deltaY?v=k.deltaY:k.wheelDelta&&(v=-k.wheelDelta);var p=g.offset(),t=k.pageX-p.left;k=k.pageY-p.top;var p=(t-r)/u,l=(k-q)/x;0>v?(u+=u*f.zoom,x+=x*f.zoom):(u-=u*f.zoom,x-=x*f.zoom);r=t-u*p;q=k-x*l;u<=n||x<=m?h():A()};j.onmousedown=function(l){function p(t){t.preventDefault();r+=t.pageX-k.pageX;q+=t.pageY-k.pageY;k=t;A()}var k=l;l.preventDefault();d(document).on("mousemove",p).one("mouseup",function(){d(document).unbind("mousemove",p)})}}var j=this,g=d(j);if(j.complete){i()}else{g.one("load",i)}}):this};d.fn.wheelzoom.defaults=c})(window.jQuery);