namespace cor_da_chita_api
{
    public interface IOrderRepository
    {
        Task<List<OrderDto>> GetAsync();
        Task<OrderDto?> GetAsync(string id);
        Task CreateAsync(OrderDto newOrder);
        Task UpdateAsync(string id, OrderDto updatedOrder);
        Task RemoveAsync(string id);
    }
}
