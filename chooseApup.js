const btn1 = document.getElementById('btn1');

const dogs = ["dog.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg", "dog5.jpg", "dog6.jpg", "dog7.jpg", "dog8.jpg"];



function findDog(){
   return Math.floor(Math.random() * dogs.length);
};

btn1.addEventListener('click', function(){
  /// document.body.style.backgroundAttachment = "url('" + dogs[1] +"')";
  const rand = findDog(); 
  document.body.style.backgroundImage="url('" + dogs[rand] +"')";
});

