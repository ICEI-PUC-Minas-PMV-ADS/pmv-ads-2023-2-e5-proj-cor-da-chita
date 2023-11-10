namespace cor_da_chita_api.Models
{
    public class FreightDeserialize
    {
        public string CepOrigem { get; set; }
        public string CepDestino { get; set; }
        public decimal ValorPac { get; set; }
        public int PrazoPac { get; set; }

        public decimal ValorSedex { get; set; }

        public int PrazoSedex { get; set; }
    }
}
