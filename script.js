/* Task 1 */
var heading = document.getElementById("heading")
console.log(heading.InnerText)

/* Task 2 using plain JavaScript */
    function addText2(){
    var task2div = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText= "Hello World"
    task2div.appendChild(paragraph)
    }
    var textBtn = document.getElementById('textBtn2a')
    textBtn.addEventListener('click',addText2)
    //Task 2 b
    function changeBGcolor(event){
            var body = document.getElementById('body')[0]
        if(event.target.innerText == "Red"){
            body.styler.backgroundColor = 'red'
        }
        if(event.target.innerText == "Green"){
            body.styler.backgroundColor = 'green'
        }
        
        }
        
        
    }

/* Task 4 using jQuery */
