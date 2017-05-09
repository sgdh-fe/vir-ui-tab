var Tab = VirUiTab({
  eventType: 'mouseover'
})

var tab = new Tab({
  el: '.demo'
})
tab.$watch('state', function (result) {
  var index = result.value
  console.log('初始化完成', this.get('index'))
})

tab.$watch('index', function (result) {
  var index = result.value
  this.$$('ul > li').eq(index).html(index)
})

tab.set('index', 0, {
  force: true
})
