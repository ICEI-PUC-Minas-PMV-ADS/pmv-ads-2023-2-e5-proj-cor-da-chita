using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace cor_da_chita_api
{
    public class OrderDto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public List<Items> Items { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string Street { get; set; }
        public string Neighborhood { get; set; }
        public Freight Freight { get; set; }
    }

    public class Items
    {

        public string ProductId { get; set; } 
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
    }

    public class Freight
    {
        public double TotalWithFreight { get; set; }
        public double FreightValue { get; set; }
    }
}
