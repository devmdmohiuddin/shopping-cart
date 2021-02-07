document.getElementById('case-increase').addEventListener('click', function(event) {
  handleProductChange('case', true)
})

document.getElementById('case-decrease').addEventListener('click', function(event) {
  handleProductChange('case', false)
})
document.getElementById('phone-increase').addEventListener('click', function(event) {
  handleProductChange('phone', true)
})

document.getElementById('phone-decrease').addEventListener('click', function(event) {
  handleProductChange('phone', false)
})

function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + '-count')
  const productCount = parseInt(productInput.value)
  let productNewCount = productCount
  if (isIncrease === true) {
    productNewCount = productCount + 1
  } 
  if (isIncrease === false && productCount > 0) {
    productNewCount = productCount - 1
  }
  productInput.value = productNewCount  
  let productTotal = 0
  if (product === 'phone') {
    productTotal = productNewCount * 1219
  }
  if (product === 'case') {
    productTotal = productNewCount * 59
  }

  document.getElementById(product + '-total').innerText = `$ ${productTotal}`
  calculateTotal()
}

function calculateTotal() {
  const phoneCount = getInputValue('phone')
  const caseCount = getInputValue('case')

  const subtotalPrice = phoneCount * 1219 + caseCount * 59
  document.getElementById('subtotal').innerText = `$ ${subtotalPrice}`

  const taxPrice = Math.round(subtotalPrice * .01)
  document.getElementById('tax').innerText = `$ ${taxPrice}`

  const totalPrice = subtotalPrice + taxPrice
  document.getElementById('total').innerText = `$ ${totalPrice}`

}

function getInputValue(product) {
  const productInput = document.getElementById(product + '-count')
  const productCount = parseInt(productInput.value)
  return productCount
}


// function handleProductChange(isIncrease) {
//   const caseInput = document.getElementById('case-count')
//   const caseCount = parseInt(caseInput.value)
//   let caseNewCount = caseCount
//   if (isIncrease === true) {
//     caseNewCount = caseCount + 1
//   } 
//   if (isIncrease === false && caseCount > 0) {
//     caseNewCount = caseCount - 1
//   }
//   caseInput.value = caseNewCount  
//   const caseTotal = caseNewCount * 59
//   document.getElementById('case-total').innerText = `$ ${caseTotal}`
// }

// function handlePhoneChange(isIncrease) {
//   const phoneInput = document.getElementById('phone-count')
//   const phoneCount = parseInt(phoneInput.value)
//   let phoneNewCount = phoneCount
//   if (isIncrease === true) {
//     phoneNewCount = phoneCount + 1
//   } 
//   if (isIncrease === false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1
//   }
//   phoneInput.value = phoneNewCount  
//   const phoneTotal = phoneNewCount * 1219
//   document.getElementById('phone-total').innerText = `$ ${phoneTotal}`
// }














// // mobile increment button
// const mobileIncrementBtn = document.getElementById('mobile-increment-btn')
// mobileIncrementBtn.addEventListener('click', function(event) {
//   const mobileInputNumber = inputNumber('mobile-input')
//   const mobilePriceNumber = priceNumber('mobile-price')

//   document.getElementById('mobile-input').value = mobileInputNumber + 1
//   document.getElementById('mobile-price').innerText = mobilePriceNumber + 1219 
//   total()
// })

// // mobile decrement button
// const mobileDecrementBtn = document.getElementById('mobile-decrement-btn')
// mobileDecrementBtn.addEventListener('click', function(event) {
//   const mobileInputNumber = inputNumber('mobile-input')
//   const mobilePriceNumber = priceNumber('mobile-price')

//   if (mobileInputNumber > 1) {
//     document.getElementById('mobile-input').value = mobileInputNumber - 1
//     document.getElementById('mobile-price').innerText = mobilePriceNumber - 1219 
//   }
//   total()
// })

// // cover increment button
// const coverIncrementBtn = document.getElementById('cover-increment-btn')
// coverIncrementBtn.addEventListener('click', function(event) {
//   const coverInputNumber = inputNumber('cover-input')
//   const coverPriceNumber = priceNumber('cover-price')

//   document.getElementById('cover-input').value = coverInputNumber + 1
//   document.getElementById('cover-price').innerText = coverPriceNumber + 59 
//   total()
// })

// // mobile decrement button
// const coverDecrementBtn = document.getElementById('cover-decrement-btn')
// coverDecrementBtn.addEventListener('click', function(event) {
//   const coverInputNumber = inputNumber('cover-input')
//   const coverPriceNumber = priceNumber('cover-price')

//   if (coverInputNumber > 1) {
//     document.getElementById('cover-input').value = coverInputNumber - 1
//     document.getElementById('cover-price').innerText = coverPriceNumber - 59 
//   }
//   total()
// })

// function inputNumber(id) {
//   const input = document.getElementById(id).value
//   const inputNumber = parseFloat(input)
//   return inputNumber
// }

// function priceNumber(id) {
//   const price = document.getElementById(id).innerText
//   const priceNumber = parseFloat(price)
//   return priceNumber
// }

// function total() {
//   const mobilePrice = priceNumber('mobile-price')
//   const coverPrice = priceNumber('cover-price')

//   document.getElementById('subtotal').innerText = mobilePrice + coverPrice
//   document.getElementById('total').innerText = mobilePrice + coverPrice
// }
