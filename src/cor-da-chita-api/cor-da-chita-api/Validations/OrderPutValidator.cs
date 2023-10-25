using cor_da_chita_api.Models;
using FluentValidation;

namespace cor_da_chita_api.Validations
{
    public class OrderPutValidator :AbstractValidator<OrderDto>
    {
        public OrderPutValidator() 
        {

            RuleFor(x => x.Id)
                .MinimumLength(0)
                .WithMessage("Id cannot Be empty");

            RuleFor(x => x.UserEmail).
                    NotEmpty().
                    EmailAddress().
                    WithMessage("Email not valid ");


            RuleFor(x => x.UserName)
                    .NotEmpty()
                    .WithMessage("User Name cannot be empty");

            RuleFor(x => x.Neighborhood)
                .NotEmpty()
                .WithMessage("Neighborhood cannot be empty");

            RuleFor(x => x.Street)
                .NotEmpty()
                .WithMessage("Street cannot be empty");



        }


    }
}
