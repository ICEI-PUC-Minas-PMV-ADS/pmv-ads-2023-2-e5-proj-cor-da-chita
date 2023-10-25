using cor_da_chita_api.Models;
using FluentValidation;

namespace cor_da_chita_api.Validations
{
    public class OrderIdValidator: AbstractValidator<string>
    {

        public OrderIdValidator() 
        {

            RuleFor(x=>x)
                    .MinimumLength(0)
                    .WithMessage("Id cannot Be empty");

        }
    }
}
