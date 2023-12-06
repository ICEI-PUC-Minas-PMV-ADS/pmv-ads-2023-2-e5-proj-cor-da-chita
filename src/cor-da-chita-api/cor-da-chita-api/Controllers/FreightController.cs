using cor_da_chita_api.Models;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Http;
using MercadoPago.Resource.Payment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using Newtonsoft.Json;
using MongoDB.Bson;
using cor_da_chita_api.Extensions;
using cor_da_chita_api.Controllers.Requests;

namespace cor_da_chita_api.Controllers
{
    /// <summary>
    /// Controller to Management Pix Payment
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class FreightController : ControllerBase
    {
        //CEP de biel,mudar depois para cep de onde a mãe da illa for enviar
        private const string cepOrigem = "58045010";

        //URl DA API
        private string urlCalculoFrete = "https://cepcerto.com/ws/json-frete";


    
        private readonly HttpClient _httpClient;

        public FreightController()
        {
            _httpClient = new HttpClient();
        }
      
        // GET: FreightController
        /// <summary>
        /// Get values of freight
        /// </summary>
        /// <param name="Order"></param>
        /// <returns>Freight Values</returns>
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]

        [HttpPost("CalcFreight")]

        public async Task<ActionResult<FreightDeserialize>> CalcFrete(FreightRequest model)
        {
            try
            {



                string url = $"{urlCalculoFrete}/{cepOrigem}/{model.Cep}/1000/20/20/20/2f9fab7f7edc1f29de78ea5ce98b91c4b12927ad";


                var a = await _httpClient.GetStringAsync(url);

            var frete = JsonConvert.DeserializeObject<FreightDeserialize>(a);

            //Necessita desta formula,pois o valor esta vindo em casa de milhar, ex 2930 ao invés de 29,30
            decimal pacConvertido = frete.ValorPac / 1000 * 10;
            decimal sedexConvertido = frete.ValorSedex / 1000 * 10;

            frete.ValorPac = pacConvertido;
            frete.ValorSedex = sedexConvertido;
         
           
            return Ok(frete);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToErrorReponse());
            }



        }


    }
}
