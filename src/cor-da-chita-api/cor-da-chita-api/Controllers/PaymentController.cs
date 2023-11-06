using cor_da_chita_api.Models;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Http;
using MercadoPago.Resource.Payment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace cor_da_chita_api.Controllers
{
    /// <summary>
    /// Controller to Management Pix Payment
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class PaymentController : ControllerBase
    {
        // GET: PaymentController
        /// <summary>
        /// Get the payment by the payment Id
        /// </summary>
        /// <param name="id">Id</param>
        /// <returns>The paymnet client Entity</returns>
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]

        [HttpGet("{id}")]
        //Tipo int não serve como parâmentro pois o Id do pagamento é muito grande
        public async Task<ActionResult<PaymentClient>> Get(long id)
        {

            //Credenciais de produção da conta do BIEL,depois trocar para a conta da mãe da illa
            MercadoPagoConfig.AccessToken = "APP_USR-1074535318686097-092619-f4d68b7a71ca6ac3c6b1fba004f9e81a-238459047";

            var client = new PaymentClient();
            var payment = client.Get(id);

            return Ok(payment);



        }

        /// <summary>
        /// Create The Payment With PIX in Mercado Pago returning the QrCode Key 
        /// </summary>
        /// <param name="id">The entity </param>
        /// <returns>Payment Client Data</returns>
        /// <response code="200">Payment found</response>
        /// <response code="404">Payment Not found</response>
        /// <response code="500">Server Error</response>
        /// <response code="403">Not Authorized</response>
        /// 
        [HttpPost("CreatePixPayment")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]

        public async Task<ActionResult<PaymentClient>> CreatePayment(OrderDto order)
        {

            try
            {
                //Credenciais de produção da conta do BIEL,depois trocar para a conta da mãe da illa

                MercadoPagoConfig.AccessToken = "APP_USR-1074535318686097-092619-f4d68b7a71ca6ac3c6b1fba004f9e81a-238459047";
                //Define em 2 o numero de tentativas para realizar o pagamento

                var defaultStrategy = new DefaultRetryStrategy(2);

                var request = new PaymentCreateRequest
                {
                    TransactionAmount = order.Freight.TotalWithFreight,
                    Description = "New Product",
                    PaymentMethodId = "pix",

                    Payer = new PaymentPayerRequest
                    {
                        Email = order.UserEmail,
                        FirstName = order.UserName.Split(' ')[0],
                        LastName = order.UserName.Split(' ')[1],
                        Identification = new IdentificationRequest
                        {
                            Type = "CPF",
                            Number = "233325454",
                        },
                    },
                };

                var client = new PaymentClient();
                //Realiza a criação do pagamento retornando as informações como status do pagamento,id e mais importante O código do QRcode
                Payment payment = await client.CreateAsync(request);
                return Ok(payment);

            }


            catch (UnauthorizedAccessException)
            {
                return StatusCode(StatusCodes.Status401Unauthorized);
            }

            catch (Exception exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, exception.Message);
            }
        }


    }
}
