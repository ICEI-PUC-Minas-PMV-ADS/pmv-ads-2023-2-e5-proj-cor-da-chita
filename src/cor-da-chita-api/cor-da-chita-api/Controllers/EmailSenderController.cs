using cor_da_chita_api.Models;
using cor_da_chita_api.Service;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace cor_da_chita_api.Controllers
{
    /// <summary>
    /// Controller to send Email to an user when transaction happens
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class EmailSenderController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailSenderController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        // POST: EmailSenderController
        /// <summary>
        /// Post email
        /// </summary>
        /// <param name="id">Email Request</param>
        /// <returns>Status Code</returns>
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Forbidden)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EmailInputModel request)
        {
            try
            {
                 _emailService.SendEmail(request);
                return Ok();
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "Ocorreu um erro ao enviar o e-mail.");
            }
        }
    }
}
