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

      


    }
}
