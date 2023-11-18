
using cor_da_chita_api.Controllers.Requests;
using cor_da_chita_api.Models;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;

namespace cor_da_chita_api.Service

{
    public interface IPaymentService
    {

        public Task<Payment> CreatePixPayment(OrderRequest order);

    }
}
