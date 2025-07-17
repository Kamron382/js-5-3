let btn = document.querySelector('button')
let div =document.querySelector('div')

btn.addEventListener('click',()=>{

        let inp = document.querySelector('input')
        fetch(`https://api.nationalize.io/?name=${inp.value}`)
          .then((res) => res.json())
          .then((data) => {
            div.innerHTML = ''
            data.country.map((item)=>{

               let number = (item.probability *100).toFixed(1)

                div.innerHTML += `
                        <li>${item.country_id}: ${number}%</li>
                `;
            })
          });
})