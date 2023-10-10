namespace cor_da_chita_api
{
    public interface IOrderService
    {
        Task<List<OrderDto>> GetAsync();
        Task<OrderDto?> GetAsync(string id);
        Task CreateAsync(OrderDto newOrder);
    }
}
