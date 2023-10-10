namespace cor_da_chita_api
{
    public class OrderService : IOrderService
    {
        public IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<List<OrderDto>> GetAsync()
        {
            return await _orderRepository.GetAsync();
        }

        public async Task<OrderDto?> GetAsync(string id)
        {
            return await _orderRepository.GetAsync(id);
        }

        public async Task CreateAsync(OrderDto newOrder)
        {
            await _orderRepository.CreateAsync(newOrder);
        }

        public Task UpdateAsync(OrderDto orderToBeUpdated) 
        {


            return null;
        
        }
       
    
    }
}
