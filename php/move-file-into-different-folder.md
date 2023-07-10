# HowTo move a file into a different folder

- The `rename` function does this.

`rename('image1.jpg', 'del/image1.jpg');`

- If you want to keep the existing file on the same place you should use copy
  
`copy('image1.jpg', 'del/image1.jpg');`
