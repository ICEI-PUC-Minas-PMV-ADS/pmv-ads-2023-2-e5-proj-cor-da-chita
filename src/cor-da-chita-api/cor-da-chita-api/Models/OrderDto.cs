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
        public string Num { get; set; }
        public string City { get; set; }
        public string UF { get; set; }
        public string CEP { get; set; }
        public string Complement { get; set; }
        public Freight Freight { get; set; }
        public long? OrderPixId {  get; set; }
        public DateTime OrderDate { get; set; }
        public string PhoneNumber { get; set; }

        public decimal TotalPriceProducts { get; set; }
    }

    public class Items
    {

        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
    }

    public class Freight
    {
       
        public decimal TotalWidthFreight { get; set; }       // cm    
        public decimal TotalHeightFreight { get; set; }     // cm    
        public decimal TotalLengthFreight { get; set; }     // cm
        public decimal TotalWheightFreight { get; set; }    // gramas
        public decimal FreightValue { get; set; }
    }
}
