using cor_da_chita_api.Models;

namespace cor_da_chita_api.Repository
{
    public interface IOrderRepository
    {
        Task<List<OrderDto>> GetAllAsync();
        Task<OrderDto?> GetAsync(string id);
        Task CreateAsync(OrderDto newOrder);
        Task UpdateAsync(string id, OrderDto updatedOrder);
        Task RemoveAsync(string id);
    }
}
