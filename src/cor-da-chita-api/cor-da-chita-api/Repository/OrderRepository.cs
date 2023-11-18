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

        public async Task<List<OrderDto>> GetAllAsync()
        {

            try
            {
                return await _ordersCollection.Find(_ => true).ToListAsync();

            }
            catch
            {
                throw;
            }
        }

        public async Task<List<OrderDto>> GetAllOrderByEmail(string email)
        {
           return await _ordersCollection.Find(x=>x.UserEmail == email).ToListAsync();

        }




        public async Task<OrderDto?> GetAsync(string id)
        {
            try
            {
                return await _ordersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
            }
            catch
            {
                throw;
            }

        }

        public async Task<OrderDto?> CreateAsync(OrderDto newOrder) { 
        
            await _ordersCollection.InsertOneAsync(newOrder);
            return newOrder;
        }

        public async Task<OrderDto> UpdateAsync(OrderDto updatedOrder)
        {
            try
            {

                _ = await _ordersCollection.FindAsync(updatedOrder.Id) ?? throw new KeyNotFoundException();

                await _ordersCollection.ReplaceOneAsync(x => x.Id == updatedOrder.Id, updatedOrder);

                return updatedOrder;
            }
            catch
            {
                throw;
            }

        }



        public async Task RemoveAsync(string id)
        {
            try
            {
                _ = await _ordersCollection.FindAsync(id) ?? throw new KeyNotFoundException();

                await _ordersCollection.DeleteOneAsync(x => x.Id == id);

            }
            catch
            {
                throw;
            }

        }
    }
}
