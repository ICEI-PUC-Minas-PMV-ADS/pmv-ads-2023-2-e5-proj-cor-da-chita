using Microsoft.AspNetCore.Mvc;
using MercadoPago.Config;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Resource.Payment;
using MercadoPago.Http;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using static Microsoft.AspNetCore.Http.StatusCodes;
using cor_da_chita_api.Service;
using cor_da_chita_api.Models;
using cor_da_chita_api.Validations;
using cor_da_chita_api.Extensions;
using cor_da_chita_api.Repository;
using cor_da_chita_api.Controllers.Requests;
using MongoDB.Driver;
using System.Net;
using System.Xml;

namespace cor_da_chita_api.Controllers
{
    /// <summary>
    /// Controller to manage Order Services
    /// </summary>

    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]

    public class OrderController : ControllerBase
    {
        private readonly IOrderService _ordersService;
        private readonly IEmailService _emailService;
        private readonly IPaymentService _paymentService;

        private const string EMAIL_SUBJECT = "Seu pedido foi recebido e esta sendo processado!";

        private const string EMAIL_SUBJECT_OWNER = "Oba! Mais um pedido chegando.";

        private const string EMAIL_COR_DA_CHITA_OWNER = "ilanobregaeq@gmail.com";


        public OrderController(IOrderService ordersService, IEmailService emailService, IPaymentService paymentService)
        {
            _ordersService = ordersService;
            _emailService = emailService;
            _paymentService = paymentService;

        }

        /// <summary>
        /// Endpoint to Get All Orders
        /// </summary>
        /// <returns>List of Orders</returns>
        [HttpGet(Name = "Order")]
        public async Task<List<OrderDto>> GetAll()
        {

            return await _ordersService.GetAllAsync();
        }
        /// <summary>
        /// Get all orders with user email
        /// </summary>
        /// <returns>List of Orders</returns>
        [HttpGet("OrdersWithEmail/{email}")]
        public async Task<List<OrderDto>> GetAllOrdersWithEmail(string email)
        {

            return await _ordersService.GetAllOrderByEmail(email);
        }
        /// <summary>
        /// Endpoint To Get Order By Id
        /// </summary>
        /// <param name="id">The order Id to be Found</param>
        /// <returns>The order finded</returns>
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<OrderDto>> Get(string id)
        {

            
            var order = await _ordersService.GetAsync(id);

            if (order is null)
            {
                return NotFound();
            }

            return order;
        }

        /// <summary>
        /// Endpoint To Create Order
        /// </summary>
        /// <param name="newOrder">Order to be created</param>
        /// <returns>The order created</returns>
        [HttpPost]
        
        public async Task<IActionResult> Post(OrderRequest newOrder)
        {
            try
            {
                OrderPostValidator o1 = new OrderPostValidator();

                var validatioResult = o1.Validate(newOrder);

                if (!validatioResult.IsValid)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, validatioResult.ToValidationErrorReponse());
                }

                var paymentCreated = await _paymentService.CreatePixPayment(newOrder);

                newOrder.OrderPixId = paymentCreated.Id;


                var orderCreated = await _ordersService.CreateAsync(newOrder);



                var a = 20;





                var emailProperties = new EmailInputModel
                {
                    Subject = EMAIL_SUBJECT,
                    Body = EmailBodyBuilder.EmailBodyTemplate(orderCreated!),
                    RecipientEmailAddress = newOrder.UserEmail
                };

                var emailPropertiesOwner = new EmailInputModel
                {
                    Subject = EMAIL_SUBJECT_OWNER,
                    Body = EmailBodyBuilderOwner.EmailBodyTemplateOwner(orderCreated!),
                    RecipientEmailAddress = EMAIL_COR_DA_CHITA_OWNER
                };






                _emailService.SendEmail(emailProperties);
                _emailService.SendEmail(emailPropertiesOwner);



                return Ok(orderCreated);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToErrorReponse());
            }
        }

        /// <summary>
        /// Endpoint to Get Update the order
        /// </summary>
        /// <param name="id">The order Id to be Found</param>
        /// <param name="order">The order with changes to me made</param>
        /// <returns>The order finded</returns>
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult<OrderDto>> Put(string id ,OrderDto order)
        {
        /*    if(id!=order.Id) return BadRequest();*/

            try
            {
                OrderPutValidator o1 = new OrderPutValidator();
                var validationResult = o1.Validate(order);

                if (!validationResult.IsValid)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, validationResult.ToValidationErrorReponse());

                }

                var orderUpdated = await _ordersService.UpdateAsync(order);

                return Ok(orderUpdated);

            }

            catch (KeyNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound,new NotFoundResult().ToNotFoundReponse("OrderDto"));
            }

            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToErrorReponse());
            }


        }

        /// <summary>
        /// Endpoint to Delete ORDER
        /// </summary>
        /// <param name="id">The if of the order to be deleted</param>
        [HttpDelete("{id:length(24)}")]
        public async Task <ActionResult> Delete(string id)
        {
            try
            {
                OrderIdValidator o1 = new OrderIdValidator();
                
                var validationResult = o1.Validate(id);

                if (!validationResult.IsValid)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, validationResult.ToValidationErrorReponse());
                }

                await _ordersService.RemoveAsync(id);

                return Ok();

            }
            catch (KeyNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound, new NotFoundResult().ToNotFoundReponse("OrderDto"));

            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToErrorReponse());
            }
        }
    }
}
