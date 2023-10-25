using cor_da_chita_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace cor_da_chita_api.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IMongoCollection<OrderDto> _ordersCollection;

        public OrderRepository(
            IOptions<CorDaChitaDatabaseSettings> corDaChitaDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                corDaChitaDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                corDaChitaDatabaseSettings.Value.DatabaseName);

            _ordersCollection = mongoDatabase.GetCollection<OrderDto>(
                corDaChitaDatabaseSettings.Value.OrdersCollectionName);
        }

        public async Task<List<OrderDto>> GetAsync() =>
        await _ordersCollection.Find(_ => true).ToListAsync();

        public async Task<OrderDto?> GetAsync(string id) =>
            await _ordersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(OrderDto newOrder) =>
            await _ordersCollection.InsertOneAsync(newOrder);

        public async Task UpdateAsync(string id, OrderDto updatedOrder) =>
            await _ordersCollection.ReplaceOneAsync(x => x.Id == id, updatedOrder);

        public async Task RemoveAsync(string id) =>
            await _ordersCollection.DeleteOneAsync(x => x.Id == id);
    }
}
