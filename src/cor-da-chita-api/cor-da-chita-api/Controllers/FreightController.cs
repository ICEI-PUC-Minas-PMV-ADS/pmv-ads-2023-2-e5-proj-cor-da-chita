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
        private const string cepOrigem = "33010515";

        //URl DA API
        private string urlApi = "https://cepcerto.com/ws/json-frete";

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

        [HttpPost("getFreight")]

        public async Task<ActionResult<FreightDeserialize>> GetFrete(OrderDto model)
        {
            try
            {

                string url = $"{urlApi}/{cepOrigem}/{model.CEP}/{model.Freight.TotalWheightFreight}/{model.Freight.TotalHeightFreight}/{model.Freight.TotalWidthFreight}/{model.Freight.TotalLengthFreight}/775ba44c848ce5696094a3b35815bcff01b39d46";

               /* string url = $"{urlApi}/33010515/78005020/1000/20/20/20/775ba44c848ce5696094a3b35815bcff01b39d46";*/


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
