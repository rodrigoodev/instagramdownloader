

function adicionarBotaoUI(){
    try{
        setTimeout(function(){
            document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0].append(buttonDownload);
        }, 2000);
    }catch(Ex){
        adicionarBotaoUI();
    }
}
 
adicionarBotaoUI();