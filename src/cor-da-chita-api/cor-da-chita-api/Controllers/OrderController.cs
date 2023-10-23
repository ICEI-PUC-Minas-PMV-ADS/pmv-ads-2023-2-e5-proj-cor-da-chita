using Microsoft.AspNetCore.Mvc;
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
using MercadoPago.Http;

using static Microsoft.AspNetCore.Http.StatusCodes;
using cor_da_chita_api.Service;
using cor_da_chita_api.Models;

namespace cor_da_chita_api.Controllers
{
    /// <summary>
    /// Controller to manage Order Services
    /// </summary>

    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]

    public class OrderController : ControllerBase
    {
        private readonly OrderService _ordersService;


        public OrderController(OrderService ordersService) =>
        _ordersService = ordersService;

        /// <summary>
        /// Endpoint to Get All Orders
        /// </summary>
        /// <returns>List of Orders</returns>
        [HttpGet(Name = "Order")]
        public async Task<List<OrderDto>> GetAll()
        {

            return await _ordersService.GetAsync();
        }
        /// <summary>
        /// Endpoint To Get Order By Id
        /// </summary>
        /// <param name="id">The order Id to be Found</param>
        /// <returns>The order finded</returns>
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<OrderDto>> Get(string id)
        {
            var order = await _ordersService.GetAsync(id);

            if (order is null)
            {
                return NotFound();
            }

            return order;
        }

        /// <summary>
        /// Endpoint To Create Order
        /// </summary>
        /// <param name="newOrder">Order to be created</param>
        /// <returns>The order created</returns>
        [HttpPost]
        
        public async Task<IActionResult> Post(OrderDto newOrder)
        {
            await _ordersService.CreateAsync(newOrder);

            return CreatedAtAction(nameof(Get), new { id = newOrder.Id }, newOrder);
        }

        /// <summary>
        /// Endpoint to Get Update the order
        /// </summary>
        /// <param name="id">The order Id to be Found</param>
        /// <param name="order">The order with changes to me made</param>
        /// <returns>The order finded</returns>
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult<OrderDto>> Put(string id ,OrderDto order)
        {
            var o1 = await _ordersService.GetAsync(id);

            if (order is null)
            {
                return NotFound();
            }

            return order;
        }





    }
}