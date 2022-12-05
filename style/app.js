const inputFullName = document.querySelector(".FullName"),
      inputAutoBrand = document.querySelector(".AutoBrand"),
      inputResult = document.querySelector(".Result"),
      inputTypeService = document.querySelector("#TypeService"),
      btn = document.querySelector(".Print"),
      data = document.querySelector("#data");

btn.addEventListener('click', function(){
        const filler = '<span>не указано</span>';
        const my_window = window.open(
          "",
          "mywindow",
          "status=0,width=500,height=350,top=150,left=150"
        );
        my_window.document.write(`<html>
        <head>
        <title>Печать чека</title>
        <style>
        @media print {
          .no{
            display: none;
           }
        }
        button{
            cursor: pointer;
            margin: 10px 20px;
        }
        p span{
            color: crimson;
            font-weight: bold;
        }
        </style>
        </head>
        <body onafterprint="self.close()">
        <p><b>Дата:</b> ${data.value || filler}</p>
        <p><b>ФИО заказчика:</b> ${inputFullName.value || filler}</p>
        <p><b>Марка автомобиля:</b> ${inputAutoBrand.value || filler}</p>
        <p><b>Вид работ:</b> ${inputTypeService.value || filler}</p>
        <p>--------------------</p>
        <p><b>Стоимость:</b> ${inputResult.value || filler} рублей</p>
        <div class="no"><button onclick="window.print()">Печать</button><button onclick="window.close()">Закрыть</button></div>
        </body>
        </html>`);
      });
