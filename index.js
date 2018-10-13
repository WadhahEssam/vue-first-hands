// 1
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data: 'This is the data variable'
  }
})

// 2
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// 3
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

// 4
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'React' },
      { text: 'Angular' },
      { text: 'Vue' },
    ]
  }
})