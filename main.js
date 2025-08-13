(function () {
  if (document.getElementById('megaGui')) {
    document.getElementById('megaGui').remove();
    return;
  }

  const gui = document.createElement('div');
  gui.id = 'megaGui';
  Object.assign(gui.style, {
    position: 'fixed',
    top: '20px',
    left: '20px',
    width: '400px',
    height: '500px',
    backgroundColor: '#f0f0f0',
    color: '#000',
    border: '2px solid #000',
    padding: '15px',
    zIndex: 99999,
    overflowY: 'auto',
    fontFamily: 'sans-serif'
  });

  const title = document.createElement('div');
  title.textContent = 'Mega cool72';
  title.style.fontSize = '20px';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '10px';
  gui.appendChild(title);

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'check1';
  const checkLabel = document.createElement('label');
  checkLabel.htmlFor = 'check1';
  checkLabel.textContent = ' Enable something';
  gui.appendChild(checkbox);
  gui.appendChild(checkLabel);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Radio buttons
  const radio1 = document.createElement('input');
  radio1.type = 'radio';
  radio1.name = 'choice';
  radio1.id = 'radio1';
  radio1.checked = true;
  const label1 = document.createElement('label');
  label1.htmlFor = 'radio1';
  label1.textContent = ' Option A';

  const radio2 = document.createElement('input');
  radio2.type = 'radio';
  radio2.name = 'choice';
  radio2.id = 'radio2';
  const label2 = document.createElement('label');
  label2.htmlFor = 'radio2';
  label2.textContent = ' Option B';

  gui.appendChild(radio1);
  gui.appendChild(label1);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(radio2);
  gui.appendChild(label2);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Text input
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'Enter text...';
  textInput.style.width = '100%';
  gui.appendChild(textInput);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Number input
  const numberInput = document.createElement('input');
  numberInput.type = 'number';
  numberInput.value = 10;
  numberInput.style.width = '100%';
  gui.appendChild(numberInput);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Slider
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 0;
  slider.max = 100;
  slider.value = 50;
  slider.style.width = '100%';
  gui.appendChild(slider);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Buttons
  const btn1 = document.createElement('button');
  btn1.textContent = 'Submit';
  btn1.onclick = () => {
    alert('Submitted!\n' +
      'Checkbox: ' + checkbox.checked + '\n' +
      'Radio: ' + (radio1.checked ? 'A' : 'B') + '\n' +
      'Text: ' + textInput.value + '\n' +
      'Number: ' + numberInput.value + '\n' +
      'Slider: ' + slider.value);
  };
  btn1.style.marginRight = '10px';

  const btn2 = document.createElement('button');
  btn2.textContent = 'Reset';
  btn2.onclick = () => {
    checkbox.checked = false;
    radio1.checked = true;
    textInput.value = '';
    numberInput.value = 10;
    slider.value = 50;
  };

  gui.appendChild(btn1);
  gui.appendChild(btn2);
  gui.appendChild(document.createElement('br'));
  gui.appendChild(document.createElement('br'));

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '❌ Close GUI';
  closeBtn.style.backgroundColor = '#f55';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.padding = '5px 10px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.onclick = () => gui.remove();
  gui.appendChild(closeBtn);

  document.body.appendChild(gui);

  console.log("✅ Mega GUI added! Run again to remove.");
})();