const e=(e,t)=>new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)})),t={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name$="delay"]'),step:document.querySelector('input[name$="step"]'),amount:document.querySelector('input[name$="amount"]')};t.form.addEventListener("submit",(o=>{o.preventDefault();const n=Number(t.amount.value),r=Number(t.step.value);let l=Number(t.firstDelay.value);for(let t=1;t<=n;t++)e(t,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),l+=r;o.target.reset()}));
//# sourceMappingURL=03-promises.df8c7b76.js.map