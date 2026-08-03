
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'))}
const form=document.querySelector('#contact-form'),status=document.querySelector('#form-status');
if(form){form.addEventListener('submit',async e=>{e.preventDefault();const b=form.querySelector('button');b.disabled=true;b.textContent='Sending…';status.textContent='';try{const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});if(!r.ok)throw new Error();status.textContent='Thank you — your enquiry has been sent to Neil.';form.reset()}catch(err){status.textContent='Sorry, the enquiry could not be sent. Please call or WhatsApp Neil instead.'}finally{b.disabled=false;b.textContent='Send enquiry'}})}
