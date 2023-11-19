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

        public async Task<ActionResult<PaymentClient>> Get(long id)
        {

           
            MercadoPagoConfig.AccessToken = "APP_USR-6208199695202903-111220-76fa5c7f18fb2a55f99d26b51eea67c0-1545639555";

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
               

                MercadoPagoConfig.AccessToken = "APP_USR-6208199695202903-111220-76fa5c7f18fb2a55f99d26b51eea67c0-1545639555";
                //Define em 2 o numero de tentativas para realizar o pagamento

                var defaultStrategy = new DefaultRetryStrategy(2);
              
                var request = new PaymentCreateRequest
                {
                    TransactionAmount = order.Freight.FreightValue + order.TotalPriceProducts,
                    
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
