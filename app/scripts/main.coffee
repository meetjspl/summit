(->
  'use strict';
  html = document.querySelector 'html'
  html.classList.remove 'no-js'
  html.classList.add 'js'
)()

(->
  'use strict'
  button = document.querySelector '.show-menu'
  nav = document.querySelector 'header nav'
  classes = nav.classList
  maxHeight = nav.clientHeight
  nav.style.maxHeight = maxHeight + 'px'

  hideMenu = -> classes.add 'hidden'
  toggleMenu = -> classes.toggle 'hidden'

  hideMenu()

  button.addEventListener(
    'click'
    -> toggleMenu()
    true
  )

  for link in nav.querySelectorAll('a')
    link.addEventListener(
      'click'
      ->
        classes.add 'fast'
        hideMenu()
        setTimeout(
          ->
            classes.remove 'fast'
          0
        )
        undefined
      true
    )

)()
