 
//Get Element By Id 

 function myFunction() {
    setInterval(function(){ document.getElementById('h1').innerHTML = `Innova Academy`  }, 1000);
  }

  //Get Element By Class Name

  
  function mouseOver() {
   var x = document.getElementsByClassName("demo");
   x[0].style.color = "red";
  }
  
  function mouseOut() {
     var x = document.getElementsByClassName("demo");
    x[0].style.color = "purple";
  }



  //Get Element By Tag Name
  function tagName() {
    setInterval(function(){
        const y =  document.getElementsByTagName('h2');
        y[0].innerHTML = `Tag Name`;  }, 1000);
  }

    //Query Selector
    function QuerySelector() {
        document.querySelector('.test').style.backgroundColor =  'red';
      }

          //Query Selector All
    function QuerySelectorAll() {
      var all =  document.querySelectorAll('#all');
      for(let i =0; i<all.length;i++){
          all[i].style.color =  'yellow';
      }
      }


       //Text Content

       function add(){
           document.getElementById('test-title').textContent += ' Web Site';
       }


       //Inner HTML

       function addContent(){
        document.getElementById('test-content').innerHTML = 
        `<form action="/action.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" value="Innova"><br><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" value="Academy"><br><br>
        <input type="submit" value="Submit">
      </form>`;
    }


       //set Attribute

       function addAttribute(){
      var c =  document.getElementById('test-input');
      c.setAttribute('type','password');
    }
    


       //Create Element

       function addElement () { 
        const para = document.createElement("p");
        const node = document.createTextNode(" Academy.");
        para.appendChild(node);
        const element = document.getElementById("test-btn");
        element.appendChild(para);
      }

 


       //Remove Child

       function removeElement() { 
        var myLinkList = document.getElementById('test-remove')
        var myRemovedLink = myLinkList.lastChild;
        myLinkList.removeChild(myRemovedLink);
      }
      

             //Class List

             function  addClassOrDelete() { 
              var g = document.body;
              g.classList.toggle('dark-mode');
            }


      //Remove Element

      function elementRemove() { 
        var myLinkList = document.getElementById('remove-element').remove();
      }
 

 