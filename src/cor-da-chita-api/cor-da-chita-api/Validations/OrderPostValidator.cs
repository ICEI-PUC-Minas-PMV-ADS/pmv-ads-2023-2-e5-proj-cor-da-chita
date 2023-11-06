using cor_da_chita_api.Controllers.Requests;
using FluentValidation;

namespace cor_da_chita_api.Validations
{
    public class OrderPostValidator : AbstractValidator<OrderRequest>
    {

        public OrderPostValidator()
        {
            RuleFor(x => x.UserEmail)
                .NotEmpty()
                .EmailAddress()
                .WithMessage("Email not valid ");

            RuleFor(x => x.UserName)
                .NotEmpty()
                .WithMessage("User Name cannot be empty");

            RuleFor(x => x.Neighborhood)
                .NotEmpty()
                .WithMessage("Neighborhood cannot be empty");

            RuleFor(x => x.Street)
                .NotEmpty()
                .WithMessage("Street cannot be empty");

            RuleFor(x => x.Num)
                .NotEmpty()
                .WithMessage("Num cannot be empty");

            RuleFor(x => x.City)
                .NotEmpty()
                .WithMessage("City cannot be empty");

            RuleFor(x => x.UF)
                .NotEmpty()
                .WithMessage("UF cannot be empty");

            RuleFor(x => x.CEP)
                .NotEmpty()
                .WithMessage("CEP cannot be empty");            

        }
    }
}

