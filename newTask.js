function Add(){
    var i = document.getElementsByClassName('two');
    var x = i.length;
    //console.log(x);

    if(x<6){
    var outerDiv=document.createElement('DIV');
    outerDiv.className='two';

    var label1 = document.createElement('LABEL');
    label1.className = "label";
    label1.innerHTML = "Option " + (x+1);

    var inpt = document.createElement('INPUT');
    inpt.type = "text";
    inpt.placeholder = "Type option here ...";
    inpt.className = "inpt2";

    outerDiv.appendChild(label1);
    outerDiv.appendChild(inpt);

    document.getElementById('opt').appendChild(outerDiv);
}
}

    // var d = document.createElement('DIV');
    // d.className = 'drop'
    // document.getElementById('inpt3').appendChild(d);

function Remove(){
    var rmv = document.getElementsByClassName('two');
    //console.log(rmv);
      var x = rmv.length - 1;
      if(x>3){
      rmv[x].parentNode.removeChild(rmv[x]);
      }
    //  rmv.splice(x,1);
    // console.log(x);
    // var y = rmv[x-1].parentElement;
    // y.style.display ="none";
    // x = x-1;
    // console.log(x);
}
function reset() {
    var val = document.getElementById('question');
    var val2 = document.getElementsByClassName('inpt2');
   // var val3 = document.getElementById('inpt3');
    val.value = val.defaultValue;
   // val3.value = val3.defaultValue;
    var i;
    for(i=0;i<val2.length;i++){
        val2[i].value = "";
    }
    var rmv = document.getElementsByClassName('two');
    var i;
    for(i=rmv.length-1;i>3;i--){
        rmv[i].parentNode.removeChild(rmv[i]);
    }
    var val4 = document.getElementById("inpt3");
    var opt = document.getElementsByClassName('answer');
    for(i=opt.length;i>0;i--){
        val4.remove(i);
    }
    
}
function addOption(){
    var option1 = document.createElement('OPTION');
    option1.className = "answer";
    document.getElementById('inpt3').appendChild(option1);
}

var data = [];
var n = 0;
var l;
var pos;

function result(){
    var t = document.getElementById('btn3').value;
    if( t === "Save"){
    
        var obj = {};
        var text = document.getElementsByClassName('inpt2');
        var val1 = document.getElementById('question');
        var ans = document.getElementsByClassName('answer');
        var a;
        for(a=ans.length;a<text.length;a++){
            addOption();
        }
        var answ = document.getElementsByClassName('answer');
        var Answer = document.getElementById("inpt3").value;
        var i=0;
        if(Answer.length === 0){
            for(h=0;h<text.length;h++){
                if(val1.value === ""){
                    alert("Fill the Question");
                }else if(text[h].value === ""){
                    alert("Fill the Option");
                    break;
                }
                else{
                    var m;
                    for(m=0;m<answ.length;m++){
                        answ[m].innerHTML = text[m].value;
                    }
                }
            }
        }else{
            

                var k=0;
                obj[k] = val1.value;
                for(k=0;k<text.length;k++){
                    obj[k+1] = text[k].value;
                }
                obj[k+1] = Answer;
                var z;
                for(z=0;z<text.length;z++){
                    if(Answer === text[z].value){
                        pos=z;
                        break;
                    }
                }
                obj[k+2] = pos;
                data.push(obj); 
                console.log(data);
                var x = document.getElementById('conclude');
                x.style.display = "block";

                var outerDiv = document.createElement('DIV');
                outerDiv.className = "table";

                var firstDiv = document.createElement('DIV');
                firstDiv.className = "first";
                firstDiv.innerHTML = "Question : " + val1.value;

                var secondDiv = document.createElement('DIV');
                secondDiv.className ="box";
                var butn1 =document.createElement('BUTTON');
                butn1.value = n;
                butn1.className = "second";
                butn1.style.cursor = "pointer";
                secondDiv.appendChild(butn1);

                var thirdDiv = document.createElement('DIV');
                thirdDiv.className ="box";
                var butn2 =document.createElement('BUTTON');
                butn2.className = "third";
                butn2.style.cursor = "pointer";
                thirdDiv.appendChild(butn2);

                var fourthDiv = document.createElement('DIV');
                fourthDiv.className ="box";
                var butn3 =document.createElement('BUTTON');
                butn3.value = n;
                n++;
                butn3.className = "fourth";
                butn3.style.cursor = "pointer";
                fourthDiv.appendChild(butn3);

                outerDiv.appendChild(firstDiv);
                outerDiv.appendChild(secondDiv);

                outerDiv.appendChild(thirdDiv);
                outerDiv.appendChild(fourthDiv);

                document.getElementById('form2').appendChild(outerDiv);


                var edit = document.getElementsByClassName('second');
                var dlt = document.getElementsByClassName('fourth');
                var i;
                for(i=0;i<dlt.length;i++){
                    dlt[i].onclick = function() {
                        //  var x = this.value;
                        //  data.splice(x,1);
                        console.log(data);
                        var y = this.parentElement.parentElement;
                        y.style.display = "none";
                        //  y.remove();
                    }
                }
            

            
                var j;
                for(j=0;j < edit.length;j++){
                    edit[j].onclick = function() {
                        
                        l = this.value; 
                        let d = Object.keys(data[l]).length;
                        document.getElementById('question').value = data[l][0];
                        var c;
                        for(c=0;c<d-3;c++){
                            addOption();
                        }
                        for(c=text.length;c<d-3;c++){
                            Add();
                        }
                        var b;
                        for(b=1;b<d-2;b++){
                            text[b-1].value = data[l][b];
                            answ[b-1].value = data[l][b];
                            answ[b-1].innerHTML = data[l][b];
                        }
                        var posi = data[l][b+1] + 1;
                        console.log(data[l]);
                        // console.log(posi);
                        var attr = document.getElementsByTagName("OPTION")[posi];
                        attr.setAttribute("selected" , "selected");
                        // console.log(attr);
                        // for(b=0;b<answ.length;b++){
                        //     console.log(answ[b].value);
                        // }
                        
                        //console.log(answ[1].value);
                        
                        // console.log(data[l][b+1]);
                        // document.getElementById('inpt3').value = "Hiiiiiii";

                        //result();
                        document.getElementById("btn3").innerHTML = "Update";
                        document.getElementById('btn3').value = "Update";
                        // var bt = document.getElementById('inpt3');
                        // bt.style.zIndex = "1";
                    // result();
                
            }

            
            
            //  var t = document.getElementById("btn3").value;
            //  console.log(t);
            //  if( t === "Update"){
            //      t = "Save";
            //      console.log(t);
            //  }
            reset();
        }
        
    }
    }else{
        document.getElementById("btn3").innerHTML = "Save";
        document.getElementById("btn3").value = "Save";
        var text = document.getElementsByClassName('inpt2');
        var val1 = document.getElementById('question');
        var ans = document.getElementsByClassName('answer');
        var obj = {};
        var k=0;
        obj[k] = val1.value;
        for(k=0;k<text.length;k++){
            obj[k+1] = text[k].value;
        }
        obj[k+1] = Answer;
        var z;
        if(ans.length !== text.length){
            for(a=ans.length;a<text.length;a++){
                addOption();
                var answ = document.getElementsByClassName('answer');
                answ[a].innerHTML = text[a].value;
            }
        }else{
            var Answer = document.getElementById("inpt3").value;
            for(z=0;z<text.length;z++){
                if(Answer === text[z].value){
                    pos=z;
                    break;
                }
            }
            obj[k+2] = pos;
            data[l] = obj;
            var f = document.getElementsByClassName('first');
            console.log(data[l]);
            f[l].innerHTML = "Question : " + val1.value;
            console.log(data);
            reset();
        }
    }
}

