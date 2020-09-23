function Just_parallax(el) {
  var _this = this;

  this.findElement = function() {
    return document.querySelector(el);
  };

  this.findChild = function() {
    var child = this.findElement().childNodes,
      childElements = [];

    child.forEach(function (value) {
      if(value.tagName !== undefined) {
        childElements.push(value);
      }
    });

    return childElements;
  };

  this.generateObject = function () {
    var target = this.findChild(),
      setObj = {},
      setArr = [];

    for(var i = 0; i < target.length; i++) {
      var item = target[i];

      setObj = {
        index : i,
        element : item,
        dataX   : item.getAttribute("data-x"),
        dataY   : item.getAttribute("data-y"),
        scroll  : item.getAttribute("data-scroll"),
        offset  : item.getAttribute("data-offset"),
        invert  : item.getAttribute("data-invert"),
        scrollInvert : item.getAttribute("data-scroll-invert")
      };

      setArr.push(setObj);

    }
    return setArr;
  };

  this.forItems = function(items, func) {
    for(var i = 0; i < items.length; i++) {
      func(items[i]);
    }
  };

  this.render = function () {
    var items = this.generateObject();
    var container = _this.findElement();


    function treatment(item) {

      if(item.offset !== null || item.offset !== 0) {
        item.element.style.marginTop = item.offset + "px";
      }

      function scrollParallax () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
          elOffsetTop = container.getBoundingClientRect().top;


        _this.forItems(items, function (item) {
          if (elOffsetTop + container.clientHeight >= 0 && elOffsetTop - window.innerHeight <= 0 && item.scroll !== null) {
            var invert =  "-",
              dataScroll = null;

            if(item.scroll <= 1 || item.scroll >= 0) {
              dataScroll = item.scroll;
            }else {
              dataScroll = 1;
            }

            if(item.scrollInvert === "true") {
              invert = "";
            }

            item.element.style.transform =
              "translateY(" + invert + scrollTop / (dataScroll * 10) + "px)";
          }
        });
      }

      function mouseParallax() {
        document.onmousemove = function (event){
          var posX = event.clientX,
            posY = event.clientY;

          _this.forItems(items, function (item) {
            var invertX = "-",
              invertY = "-",
              dataX = null,
              dataY = null;

            if(item.dataX <= 1 || item.dataX >= 0) {
              dataX = item.dataX;
            }else {
              dataX = 1;
            }

            if(+item.dataY <= 1 || item.dataY >= 0) {
              dataY = item.dataY;
            }else {
              dataY = 1;
            }

            switch(item.invert) {
              case "x" : invertX = "";
                break;
              case "y" : invertY = "";
                break;
              case "x,y" :
                invertY = "";
                invertX = "";
            }

            if(item.dataX !== null || item.dataY !== null) {
              item.element.style.transform =
                "translate3d("+ invertX + posX / (dataX * 40) + "px," + invertY + posY / (dataY * 40) +"px,0)";
            }
          });
        }
      }
      scrollParallax();
      mouseParallax();
    }

    function readyRender() {
      items.forEach(treatment);
    }

    readyRender();
    window.onresize = function (ev) {
      readyRender();
    }
  };
}


