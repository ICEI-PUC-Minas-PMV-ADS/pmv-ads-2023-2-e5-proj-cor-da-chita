using cor_da_chita_api.Models;

namespace cor_da_chita_api.Controllers.Requests
{
    public class OrderRequest
    {
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
        public long? OrderPixId { get; set; }
        public DateTime OrderDate { get; set; }
        public string PhoneNumber { get; set; }
        public decimal TotalPriceProducts { get; set; }
    
}
}
