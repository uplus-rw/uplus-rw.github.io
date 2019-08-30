$("#year").text(new Date().getFullYear());
new WOW().init();
  //init scrollspy
$("body").scrollspy({target:'#main-nav'});

//Smooth scrolling
$("#main-nav a").on("click",function(e){

if(this.hash  !== ""){
  e.preventDefault();
  const hash = this.hash;

  $("html,body").animate({
     scrollTop : $(hash).offset().top 
  },800,function(){
      window.location.hash = hash;
  });
}

});

//Footer Smooth scrolling
$("#footer-nav a").on("click",function(e){

if(this.hash  !== ""){
e.preventDefault();
const hash = this.hash;

$("html,body").animate({
   scrollTop : $(hash).offset().top 
},800,function(){
    window.location.hash = hash;
});
}

});

