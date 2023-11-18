using cor_da_chita_api.Models;

namespace cor_da_chita_api.Repository
{
    public interface IOrderRepository
    {
        Task<List<OrderDto>> GetAllAsync();
        Task<List<OrderDto>> GetAllOrderByEmail(string email);

        Task<OrderDto?> GetAsync(string id);
        Task<OrderDto?> CreateAsync(OrderDto newOrder);
        Task<OrderDto> UpdateAsync(OrderDto updatedOrder);
        Task RemoveAsync(string id);
    }
}
