const result = document.getElementById('result')
const generate = document.getElementById('generate')
const length = document.getElementById('length')
const clipboard = document.getElementById('clipboard')
const uppercase = document.getElementById('uppercase')

generate.addEventListener('click', () => {
  result.innerText = generate_password(+length.value)
})

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea')
	const password = result.innerText
	
	if(!password) { return }
	
	textarea.value = password
	document.body.appendChild(textarea)
	textarea.select()
	document.execCommand('copy')
	textarea.remove()
	alert('Password copied to clipboard')
})

const generate_password = (chars) => {
  let password = ''
  let max = 122
  let min = uppercase.checked ? 65 : 98
  if(chars>20){ 
    password = "Please try less than 20 characters"
    return password
  }
  for(i=0; i<chars; i++){
    let ranInt = Math.floor(Math.random() * (max - min + 1) + min)
    password += String.fromCharCode(ranInt)
  }
  return password
}
