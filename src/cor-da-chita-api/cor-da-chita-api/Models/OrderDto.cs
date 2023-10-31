using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace cor_da_chita_api.Models
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
        public long? OrderPixId {  get; set; }
        public DateTime OrderDate { get; set; }
        public string PhoneNumber { get; set; }
    }

    public class Items
    {

        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
    }

    public class Freight
    {
        public decimal TotalWithFreight { get; set; }
        public decimal FreightValue { get; set; }
    }
}
