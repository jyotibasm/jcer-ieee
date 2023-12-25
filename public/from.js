

var str=""
function fn1(){
    // // console.log(a)
    const a=document.getElementById("evt-sel").value
    const b=document.getElementById("parti-sel").value

    const m_f=document.getElementById("mf")

    let p1=new Promise((resolve,reject)=>{
        resolve(b); 
    })

    p1.then((value)=>{
        for(let i=1;i<=value;i++){
            str=str+`
            <div class="bg-red">
            <div class="form-con">
            <p>Participante-${i}</p>
            Name:<input id="name" name="name" type="text" placeholder="Name">
            Current Year of Study:<input id="y-o-s" name="year" type="text" placeholder="Year of Study">
            Mobile No.:<input id="mobile-num" name="mobile" type="text" placeholder="Mobile No.">
            College/University:<input id="clg-name" name="college_name"type="text" placeholder="College Name">
            <div><input type="checkbox" name="Event" value=${a}>Accect & Confirm<div>
            </div>
            </div>
            `  
        }
        str=`<h2 class="head-main-form">${a}</h2>`+str

    }).then(()=>{

        m_f.innerHTML=`<form action="/myaction" method="post">`+str+` <span><input type="submit"<span>
        </form>`
    })
    // console.log(p1)
}


function fn2(){
        let i=1
        Array.from(document.getElementsByClassName("form-con")).forEach(element=>{
            const c_d={
                name:document.getElementById(`name${i}`).value,
                year:document.getElementById(`y-o-s${i}`).value,
                mobile_num:document.getElementById(`mobile-num${i}`).value,
                clg_name:document.getElementById(`clg-name${i}`).value
            }
            console.log("hello world")
            console.log(c_d) 
            i++;
            
        })

}

