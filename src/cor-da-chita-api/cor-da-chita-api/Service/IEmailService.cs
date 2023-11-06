using cor_da_chita_api.Models;

namespace cor_da_chita_api.Service
{
    public interface IEmailService
    {
        void SendEmail(EmailInputModel request);
    }
}
