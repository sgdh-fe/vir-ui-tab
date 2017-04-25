import Vir from 'vir'
import $ from 'jquery'

export default function (options = {}) {
  let {
    index = 0,
      eventType = 'click',
      navSelector = 'ol > li',
      containerSelector = 'ul > li',
      navCurrentClass = 'cur',
      containerCurrentClass = 'cur'
  } = options

  return Vir({
    data: {
      index: 0
    },
    events: function () {
      if (eventType == 'click') {
        return {
          ['click->' + navSelector]: 'clickHandler'
        }
      }
      if (eventType == 'mouseover') {
        return {
          ['mouseenter->' + navSelector]: 'enterHandler',
          ['mouseleave->' + navSelector]: 'leaveHandler'
        }
      }
    }(),
    watch: {
      index(result) {
        let old = result.old
        let index = result.value
        this.$$(navSelector).eq(old).removeClass(navCurrentClass)
        this.$$(containerSelector).eq(old).removeClass(containerCurrentClass)
        this.$$(navSelector).eq(index).addClass(navCurrentClass)
        this.$$(containerSelector).eq(index).addClass(containerCurrentClass)
      }
    },
    methods: {
      clickHandler(event) {
        event.preventDefault()
        let $this = $(event.currentTarget)
        this.set('index', $this.attr('data-index') || $this.index())
      },
      enterHandler(event) {
        let $this = $(event.currentTarget)
        this.set('timeout', setTimeout(() => {
          this.set('index', $this.attr('data-index') || $this.index())
        }, 200))
      },
      leaveHandler() {
        clearTimeout(this.get('timeout'))
      }
    },
    init() {
      this.set('index', index)
    }
  })
}