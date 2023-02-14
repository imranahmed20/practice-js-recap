console.log('Hello')
// One side
document.getElementById('btn-bold').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    textArea.style.fontWeight = 'bold'
})
document.getElementById('btn-italic').addEventListener('click', function () {
    const textAreaItalic = document.getElementById('text-area');
    textAreaItalic.style.fontStyle = 'italic'
})
document.getElementById('btn-underline').addEventListener('click', function () {
    const textAreaUnderline = document.getElementById('text-area');
    textAreaUnderline.style.fontStyle = 'underline'
})

// Middle side
document.getElementById('btn-left').addEventListener('click', function () {
    const textAreaUnderline = document.getElementById('text-area');
    textAreaUnderline.style.textAlign = 'left'
})
document.getElementById('btn-center').addEventListener('click', function () {
    const textAreaUnderline = document.getElementById('text-area');
    textAreaUnderline.style.textAlign = 'center'
})
document.getElementById('btn-right').addEventListener('click', function () {
    const textAreaUnderline = document.getElementById('text-area');
    textAreaUnderline.style.textAlign = 'right'
})
document.getElementById('btn-justify').addEventListener('click', function () {
    const textAreaUnderline = document.getElementById('text-area');
    textAreaUnderline.style.textAlign = 'justify'
})
// last side
document.getElementById('text-color').addEventListener('mouseout', function (event){
    console.log('hi')
  const textColor =  document.getElementById('text-area');
  textColor.style.color = event.target.value;
})


// {/* <p> */}
//   {/* An example demonstrating the use of the
//   <code>&lt;input type="color"&gt;</code> control.
// </p>

// <label for="colorWell">Color:</label>
// <input type="color" value="#ff0000" id="colorWell" />

// <p>
//   Watch the paragraph colors change when you adjust the color picker. As you
//   make changes in the color picker, the first paragraph's color changes, as a
//   preview (this uses the <code>input</code> event). When you close the color
//   picker, the <code>change</code> event fires, and we detect that to change
//   every paragraph to the selected color.
// </p> */}
// {/* // function updateAll(event) { */}
// {/* //     document.querySelectorAll("p").forEach((p) => { */}
// {/* //       p.style.color = event.target.value;
// //     });
// //   } */}
