
$('h1').addClass('bigText')

// $('button').html('<em>HEEY</em>')

$('h1').click(function(){
  $('h1').css('color', 'black')
})

// $('button').click(function(){
//   $('h1').css('color', 'purple')
// })
$('input').keypress(function(event){
  // console.log(event.key)
})
// $(document).keypress(function(event){
//   $('h1').html(event.key)
//   $('h1').css('color', 'black')
// })
$('h1').on('mouseover', function(){
  $('h1').css('color', 'orange')
})

$('h1').before('<button>Before</button>')
$('h1').after('<button>After</button>')
$('h1').prepend('<button>Prepend</button>')
$('h1').append('<button>Append</button>')

// $('.btn-remove').click(function(){
//   $('button').remove()
// })

$('button').click(function(){

  // $('h1').hide()
  // $('h1').show()
  // $('h1').toggle()

  // $('h1').fadeIn()
  // $('h1').fadeOut()
  // $('h1').fadeToggle()

  // $('h1').slideUp()
  // $('h1').slideDown()
  // $('h1').slideToggle()
  $('h1').fadeOut().fadeIn().animate({opacity: 0.5})
  // $('h1').animate({opacity: 0.5}) //sempre valor numerico


})
