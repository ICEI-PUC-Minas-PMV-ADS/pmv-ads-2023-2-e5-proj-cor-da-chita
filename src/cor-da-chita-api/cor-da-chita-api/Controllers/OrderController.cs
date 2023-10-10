using Microsoft.AspNetCore.Mvc;

namespace cor_da_chita_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _ordersService;

        public OrderController(OrderService ordersService) =>
        _ordersService = ordersService;

        [HttpGet(Name = "Order")]
        public async Task<List<OrderDto>> GetAll =>
        await _ordersService.GetAsync();

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

        [HttpPost]
        public async Task<IActionResult> Post(OrderDto newOrder)
        {
            await _ordersService.CreateAsync(newOrder);

            return CreatedAtAction(nameof(Get), new { id = newOrder.Id }, newOrder);
        }
    }
}