
var editorContainer = document.createElement('div');
editorContainer.className = 'editor';
document.body.appendChild(editorContainer);

var inputContainer = document.createElement('input');
inputContainer.type = 'text';
inputContainer.id = 'txt';
var btn =  document.createElement('button');
btn.type = 'button';
btn.innerText = '按钮';
btn.onclick = function(){
     var valueInput = inputContainer.value.trim(); //把字符串开始和结束的空格内容进行删除
     
     if(valueInput ==''){
        alert('不能输入空字符串！'); 
     }
     else{
         var h5 = document.createElement('h5');
         h5.innerText = valueInput;
         con.appendChild(h5);
     }
 }
editorContainer.appendChild(inputContainer);
editorContainer.appendChild(btn);

var con = document.createElement('div');
con.className = 'container';
document.body.appendChild(con);


