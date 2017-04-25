var Tab = VirUiTab({
  eventType: 'mouseover'
})

var tab = new Tab({
  el: '.demo'
})

tab.set('index', 0, {
  force: true
})

console.log(tab)