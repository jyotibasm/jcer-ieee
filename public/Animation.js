// toggle buttton in header 
document.getElementById('mobile-menu').addEventListener('click', function () {
  var navbar = document.querySelector('.navbar ul');
  navbar.classList.toggle('show');
});

/*--"move_down" is utility class used for Dynamic Animinations of moving down--*/

const m_d=document.querySelectorAll(".move_down")
// Move -down Obsevern 
const move_down= new IntersectionObserver(obj=>{
    console.log(obj)

    obj.forEach(node=>{

      if(node.isIntersecting){
        node.target.classList.add("move-down")
      }
    },{
      threshold:1
    })
})

m_d.forEach(eachnode=>{
  move_down.observe(eachnode)
})


/*--"fade_in" is utility class used for Dynamic Animinations of moving down--*/


// Fade_in Observer classs
const f_i=document.querySelectorAll(".fade_in");

const fade_in= new IntersectionObserver(obj=>{
  console.log(obj)

  obj.forEach(node=>{

    if(node.isIntersecting){
      node.target.classList.add("fade-in")
    }
  },{
    threshold:0.50
  })
})

f_i.forEach(eachnode=>{
      fade_in.observe(eachnode)
})



/*--"move_left" is utility class used for Dynamic Animinations of moving down--*/

const m_l=document.querySelectorAll(".move_left")

const move_left= new IntersectionObserver(obj=>{
  console.log(obj)

  obj.forEach(node=>{

    if(node.isIntersecting){
      node.target.classList.add("move-left")
    }
  },{
    threshold:1
  })
})

m_l.forEach(eachnode=>{
  move_left.observe(eachnode)
})


/*--"move_right" is utility class used for Dynamic Animinations of moving down--*/

const m_r=document.querySelectorAll(".move_r")

const move_right= new IntersectionObserver(obj=>{
  console.log(obj)

  obj.forEach(node=>{

    if(node.isIntersecting){
      node.target.classList.add("moveright")
    }
  },{
    threshold:0.50
  })
})

m_r.forEach(eachnode=>{
  move-right.observe(eachnode)
})


/*--"scale_in" is utility class used for Dynamic Animinations of moving down--*/

const s_i=document.querySelectorAll(".scale_in")

const scale_in= new IntersectionObserver(obj=>{
  console.log(obj)

  obj.forEach(node=>{

    if(node.isIntersecting){
      node.target.classList.toggle("scale-in")
    }
  },{
    threshold:1
  })
})

s_i.forEach(eachnode=>{
  scale_in.observe(eachnode)
})

