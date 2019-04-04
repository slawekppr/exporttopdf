
var tabelka = '<h4>Nagłówek tabelki</h4><table class="tg"><tr>  <th class="tg-s268">Nagłówek1</th><th class="tg-0lax">Nagłówek2</th>  <th class="tg-0lax">Nagłówek3</th></tr><tr><td class="tg-0lax">wiersz</td><td class="tg-0lax">wiersz</td>  <td class="tg-0lax">wiersz</td></tr><tr><td class="tg-0lax">wiersz</td><td class="tg-0lax">wiersz</td><td class="tg-0lax">wiersz</td></tr></table>';

var przycisk1 = document.getElementById('przycisk1')
przycisk1.addEventListener('click' , function(){

//var h3 = document.querySelector('h3');
//h3.innerHTML = tabelka;


//////////////////////////////
var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(18);
  pdf.fromHTML(tabelka, 
    10, // x coord
    10,
    {
      // y coord
      width: 700// max width of content on PDF
    },
    10);
    
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  document.body.appendChild(iframe);
  
  iframe.src = pdf.output('datauristring');
  /////////////////////////////
});

// document.addEventListener("DOMContentLoaded", function() {

//     var kolumny = document.getElementsByTagName('tr')
//     for (let i = 0; i < kolumny.length; i++) {
//         kolumny[i].style.backgroundColor = 'red';
//     }

//     var tabelka = document.getElementsByTagName('table')
//     for(let t of tabelka){
//         t.style.borderWidth = '1px';
//         t.style.borderStyle = 'solid';
//         t.style.backgroundColor = '#000c0c0c0';
//         t.style.borderColor = 'blue';
//         t.style.borderRadius = '3px'
//     }

//     var btn = document.querySelector('button');
//     console.log(btn.innerText);

    

// });

// document.getElementById('button5').addEventListener('click', function() {
//     let html = '';
//     html += '<div class="module">';
//     html += '   <div>To jest <strong>dynamicznie wstawiony html</strong>:</div>';
//     html += '   <button class="button">Klik!</button>';
//     html += '   <button class="button">Inny klik!</button>';
//     html += '</div>';

//     document.querySelector('.test-cnt').innerHTML = html;
// });