if(typeof under!=="undefined"&&under!==null){
  if(typeof cta!=="undefined"&&cta!==null){
    document.addEventListener('click',function(event){
      var target=event.target;
      while(target){
        if(target.tagName==='A'&&target.classList.contains(cta)){
          const linkHref=target.href;
          event.preventDefault();
          window.open(linkHref,'_blank','_top');
          window.location.href = under;
          break;
        }
        target=target.parentNode;
      }
    });
  }else{
    document.addEventListener('click',function(event){
      var target=event.target;
      while(target){
        if(target.tagName==='A'){
          const linkHref=target.href;
          event.preventDefault();
          window.open(linkHref,'_blank','_top');
          window.location.href = under;
          break;
        }
        target=target.parentNode;
      }
    });
  }
}

if(typeof back!=="undefined"&&back!==null){
  !(function(){
    var t;
    try{
      const URL=window.location.href.split(/[#]/)[0];
      for(t=0;10>t;++t)history.pushState({},'',URL+'#');
      onpopstate=function(event){
        event.state && (top.location.href = back);
      };
    }catch(o){
      console.log(o);
    }
  })();
}
