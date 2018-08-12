//if you want to change the paragraphm you have to use `` (apostrophe)
const one = {
  template: `
    <div class='text-center my-4'>
      <h3>This is an illustration by Brett Bean</h3>
      <img class='img-fluid' src='http://conceptartworld.com/wp-content/uploads/2014/03/Brett_2D_Bean_Illustration_Concept_Art_17.jpg' alt='an illustration by Brett Bean'>
    </div>
    `
}
const two = {
  template: `
    <div class='text-center my-4'>
      <h3>This is an illustration by N. C. Wyeth</h3>
      <img class='img-fluid' src='https://redtreetimes.files.wordpress.com/2009/04/nc-wyeth-giant1.jpg' alt='an illustration by N. C. Wyeth'>
   </div>
   `
}
const three = {
  template: `
    <div class='text-center my-4'>
      <h3>This is an illustration by Wylie Beckert</h3>
      <img class='img-fluid' src='https://kirileonard.com/wp-content/uploads/2014/02/WylieBeckert-tamlin-xl-600x471.jpg' alt='an illustration by Wylie Beckert'>
    </div>
    `
}

const router = new VueRouter({
  routes: [
    {
      path: '/one',
      component: one // pointing const one
    },
    {
      path: '/two',
      component: two
    },
    {
      path: '/three',
      component: three
    }
  ]
})


var routeTest = new Vue({
  router, // need this when you use router
  el: "#app",
  data: {

  },
  methods: {

  }
}).$mount('#app')  // need this when you use router
