//获取浏览器页面可见高度和宽度
// var _PageWidth = parseInt(window.screen.width);
// var _PageHeight = parseInt(window.screen.height);
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
// var _LoadingTop = _PageHeight? _PageHeight : 0,
//     _LoadingLeft = _PageWidth ? _PageWidth : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml =
  '<div id="loadingDiv" style="position:fixed;left: 44%;top:50%;width:280px;opacity:1;filter:alpha(opacity=80);z-index:10000;"><div style="position: absolute; cursor1: wait; width: auto; height: 57px; line-height: 57px; padding-left: 50px; padding-right: 5px; background:url(/static/images/loading.gif) no-repeat scroll 5px 10px; color: #696969; font-family:\'Microsoft YaHei\';">数据加载中，请等待...</div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
  if (document.readyState == 'complete') {
    var loadingMask = document.getElementById('loadingDiv');
    loadingMask.style.display = 'none';
  }
}
