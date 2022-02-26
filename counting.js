
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
 
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(width)
console.log(height)



const counters = $$('.best-tour__count-quatity')

console.log(document.querySelector('.best-tour__count').getBoundingClientRect().top)
console.log(document.querySelector('.best-tour__count').getBoundingClientRect().bottom)


dem = 0;
document.onscroll = function() 
{
    
    if(dem == 0 && window.scrollY >= window.scrollY + document.querySelector('.best-tour__count').getBoundingClientRect().top - height/1.5)
    {   
        dem = 1;
        //window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top // Y

        //window.scrollX + document.querySelector('#elementId').getBoundingClientRect().left // X

        // console.log(window.scrollY)
        
        //    
        counters.forEach(function(counter) {
            counter.innerText = '0';
            const updateCounter = () => {
                const target =  +counter.getAttribute('data-count');
                const c = +counter.innerText;
                const stepCounter = target / 50;

                if(c < target) {
                    counter.innerText = `${Math.ceil(c + stepCounter)}`
                    setTimeout(updateCounter, 30)
                }
                else {
                    counter.innerText = target;
                }

            }

            updateCounter()
        }) 
        

    }  
}       
