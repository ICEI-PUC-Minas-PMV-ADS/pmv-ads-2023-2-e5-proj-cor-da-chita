using cor_da_chita_api.Controllers.Requests;
using cor_da_chita_api.Models;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Http;
using MercadoPago.Resource.Payment;

namespace cor_da_chita_api.Service
{
    public class PaymentService : IPaymentService
    {

        public async Task<Payment> CreatePixPayment(OrderRequest order)
        {


            MercadoPagoConfig.AccessToken = "APP_USR-6208199695202903-111220-76fa5c7f18fb2a55f99d26b51eea67c0-1545639555";
            //Define em 2 o numero de tentativas para realizar o pagamento
            var defaultStrategy = new DefaultRetryStrategy(2);




        

            //Definir o numero de casas decimais em 2, e caso não tenha valor de frete,usa só o valor total dos produtos,desconsiderando o valor de frete que vem null do front
            decimal valorPix = order.Freight.FreightValue == null ? Math.Round(order.TotalPriceProducts,2) : Math.Round((decimal)(order.TotalPriceProducts + order.Freight.FreightValue), 2);

                var request = new PaymentCreateRequest
                {

                   
                    TransactionAmount = valorPix,


                    PaymentMethodId = "pix",

                    Payer = new PaymentPayerRequest
                    {
                        Email = order.UserEmail,
                        FirstName = order.UserName.Split(' ')[0],

                    },
                };

                var client = new PaymentClient();
                //Realiza a criação do pagamento retornando as informações como status do pagamento,id e mais importante O código do QRcode
                Payment payment = await client.CreateAsync(request);
                return payment;

            


           



        }

    }
}
