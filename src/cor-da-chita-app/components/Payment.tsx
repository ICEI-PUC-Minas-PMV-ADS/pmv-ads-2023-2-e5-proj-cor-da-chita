//AINDA PRECISANDO RESOLVER,POIS NÃO ESTA RETORANDDO O QRCODE BASE 64,PARA SER MOSTRADO NA TELA
//const renderMp = () => {
//   var mercadopago = require('mercadopago');
//   mercadopago.configure({
//     access_token:"TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047"
//   })
//   // mercadopago.configurations.setAccessToken("TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047");
//   var payment_data = {
//     transaction_amount: 1000,
//     description: 'Título do produto',
//     payment_method_id: 'pix',
//     payer: {
//       email: 'bielpuneco@gmail.com',
//       first_name: 'Test',
//       last_name: 'User',
//       identification: {
//           type: 'CPF',
//           number: '19119119100'
//       },
//       address:  {
//           zip_code: '06233200',
//           street_name: 'Av. das Nações Unidas',
//           street_number: '3003',
//           neighborhood: 'Bonfim',
//           city: 'Osasco',
//           federal_unit: 'SP'
//       }
//     }
//   };
// //  mercadopago.payment.create(payment_data).then(x=>console.log(x)).catch(e=>console.log(e))
// var mercadopago = require("mercadopago");
// mercadopago.configure({
//   access_token:
//     "TEST-1074535318686097-092619-545cf67bb565d300b36dfe7e46f5eae4-238459047",
// });
// var payment_data = {
//   transaction_amount: 100,
//   description: "Título do produto",
//   payment_method_id: "pix",
//   payer: {
//     email: "bielpuneco@gmail.com",
//     first_name: "Gabriel",
//     last_name: "costa",
//     identification: {
//       type: "CPF",
//       number: "19119119100",
//     },
//     address: {
//       zip_code: "06233200",
//       street_name: "Av. das Nações Unidas",
//       street_number: "3003",
//       neighborhood: "Bonfim",
//       city: "Osasco",
//       federal_unit: "SP",
//     },
//   },
// };
// mercadopago.payment
//   .create(payment_data)
//   .then((x) => console.log(x))
//   .catch((e) => console.log(e));
//};