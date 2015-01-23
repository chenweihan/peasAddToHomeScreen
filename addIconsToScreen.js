/**
 * Created with Vim7.3 ubuntu12.04
 * @fileOverview : 
 * @author : Lyle <lylechen2014@gmial.com>
 * @since : 2015-01-22 17:33:09
 * @filename : home/addIconsToScreen.js
 * @version : 
 * @description : 
 */

;(function($){

      var method = {

          addIconToScreen : function() {
                this.myBrowser();
          },
 
          //判断设备
          myBrowser : function(){
                var userAgent = navigator.userAgent;
                if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Mac OS") > -1) {
                    this.safariRender();
                } else if (userAgent.indexOf("Chrome") > -1) {
                    this.chromeRender();
                } else if (userAgent.indexOf("Firefox") > -1) {
                    this.firefoxRender();
                }
          },

          createDom : function(){
                var html = "<div id='addIconsToScreen'>"+
                               "<div class='bg'></div>"+
                               "<span class='icon'></span>"+
                               "<span class='des'>先点击 <span class='btn'></span>  <br>再“添加到主屏幕”</span>"+
                               "<span class='close'></span>"+
                           "</div>";
                return $(html);
          },          

          safariRender : function() {
                var dom = this.createDom();
                    dom.addClass('safari');
                this.appendDom(dom);
          },

          chromeRender : function() {
                var dom = this.createDom();
                    dom.addClass('chrome');
                this.appendDom(dom);
          },

          firefoxRender : function() {
                var dom = this.createDom();
                    dom.addClass('firefox');
                this.appendDom(dom);
          },

          appendDom : function(dom) {
                if ($('#addIconsToScreen').length < 1) {
                    $('body').append(dom);
                    dom.find('.close').on('click',function(){
                        dom.remove();
                    })
                }
          },

      }

      $.addIconToScreen = function() {
          method.addIconToScreen();          
      } 

})($)
