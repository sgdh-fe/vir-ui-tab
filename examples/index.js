var Tab = VirUiTab({
  eventType: 'mouseover'
})

var tab = new Tab({
  el: '.demo'
})

tab.$watch('index', function (result) {
  var index = result.value
  this.$$('ul > li').eq(index).html(this.getState(index) ? '初始化完成' : '第一次进入')
})

tab.set('index', 0, {
  force: true
})