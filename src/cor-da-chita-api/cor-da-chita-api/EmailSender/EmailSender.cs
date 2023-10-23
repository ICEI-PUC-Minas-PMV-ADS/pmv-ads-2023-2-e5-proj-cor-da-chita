using System;
using System.Net;
using System.Net.Mail;

namespace EmailSender
{
    public static class SendEmail
    {
        public static void Send(string email)
        {
            MailMessage emailMessage = new MailMessage();
            try
            {
                var smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.EnableSsl = true;
                smtpClient.Timeout = 60 * 60;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("", "");
                
                emailMessage.From = new MailAddress("cordachita@email.com", "Cor da Chita");
                emailMessage.Body = "Testando envio de e-mail";
                emailMessage.Subject = "Teste envio";
                emailMessage.IsBodyHtml = true;
                emailMessage.Priority = MailPriority.Normal;
                emailMessage.To.Add(email);

                smtpClient.Send(emailMessage);
            }
            catch(Exception ex)
            {
                return;
            }
        }
    }
}