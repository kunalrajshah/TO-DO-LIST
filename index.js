var inputText=document.querySelector('#task');
var btn=document.querySelector('#btn');
var list=document.querySelector('#list');
var msgBox=document.querySelector('#error');

btn.addEventListener('click',gettask);

function gettask(e)
{
  e.preventDefault();
  if(inputText.value ==='')
  {
    var para=document.createElement('p');
    para.appendChild(document.createTextNode('!! Please Enter Task'));
    para.classList.add('msg');
    msgBox.appendChild(para);

    setTimeout(()=>{
      msgBox.innerHTML='';
      msgBox.classList.remove();
    },1000);
  }
  else
  {
    var task=document.createElement('li');
    task.appendChild(document.createTextNode(inputText.value));
    list.appendChild(task);

    //Adding delete button on list
    var delbtn=document.createElement('button');
    delbtn.appendChild(document.createTextNode('X'));
    delbtn.classList.add('del');
    task.appendChild(delbtn);
  }
   // clear the input box after adding task
   inputText.value='';
   setdata();           //calling function so that whenever user add task then it set data in localstorage
}

 // Adding Function on list
 list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){                      // for tag name use capital letter
      e.target.classList.toggle("checked");
      setdata()
    }
    else if(e.target.classList.contains('del')){
      e.target.parentElement.remove();
      setdata();
    }
 });

 //Adding data to localstorage so that task is even show after refreshing and window closed
 function setdata()
 {
  localStorage.setItem('data',list.innerHTML);
 }

//  Get data from localstorage
function getdata()
{
  list.innerHTML=localStorage.getItem('data');
}

getdata();  // Calling to get data 
 