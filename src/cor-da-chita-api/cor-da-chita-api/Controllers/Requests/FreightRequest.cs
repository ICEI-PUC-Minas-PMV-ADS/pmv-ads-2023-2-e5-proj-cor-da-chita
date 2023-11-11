namespace cor_da_chita_api.Controllers.Requests
{
    public class FreightRequest
    {
        public string Cep { get; set; }
        public decimal? TotalWidthFreight { get; set; }       // cm    
        public decimal? TotalHeightFreight { get; set; }     // cm    
        public decimal? TotalLengthFreight { get; set; }     // cm
        public decimal? TotalWeightFreight { get; set; }    // gramas



    }
}
