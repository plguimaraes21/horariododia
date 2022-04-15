function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
  // Bom dia!
  img.src = 'assets/morning.jpg'
  document.body.style.background = '#f0ac2e'
} else if (hora >= 12 && hora <= 18) {
  // Boa tarde!
  img.src = 'assets/afternoon.jpg'
 document.body.style.background = '#2070e9da'
} else {
  // Boa noite!
  img.src = 'assets/night.jpg'
  document.body.style.background = '#0a0a8d9f'
}
}