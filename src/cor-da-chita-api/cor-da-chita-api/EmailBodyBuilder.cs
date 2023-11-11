using cor_da_chita_api.Models;

namespace cor_da_chita_api
{
    public static class EmailBodyBuilder
    {
        private static string TABLE_WITH_PRODUCT_INFO = @"
                <tr>
                    <th>Produto/Serviço</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>##PRODUCTNAME##</td>
                    <td>##PRODUCTCOUNT##</td>
                    <td>##PRODUCTPRICE##</td>
                    <td>##TOTALPRICE##</td>
                </tr>
                ";

        private static string MAIN_EMAIL_BODY = @"
            <!DOCTYPE html>
                <html lang=""en"">
                <head>
                    <meta charset=""UTF-8"">
                    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                    <title>Confirmação de Pedido</title>
                </head>
                <body>
                    <h1>Olá ##USERNAME##,</h1>

                    <p>O seu pedido número ##ORDERNUMBER##, feito em ##ORDERDATE##, está sendo processado.</p>

                    <h2>Detalhes do Pedido:</h2>
                    <table>
                        ##TABLE##
                    </table>

                    <h2>Informações do Cliente:</h2>
                    <p>Nome: ##USERNAME##</p>
                    <p>Endereço: ##SENDADDRESS##</p>
                    <p>E-mail: ##USEREMAIL##</p>
                    <p>Telefone: ##USERPHONENUMBER##</p>

                    <h2>Resumo Financeiro:</h2>
                    <p>Subtotal: ##SUBTOTAL## </p>
                    <p>Taxas de Envio: ##FREIGHT##</p>
                    <p>Total do Pedido: ##ORDERTOTALPRICE##</p>

                    <h2>Informações de Envio:</h2>
                    <p>Método de Envio: {{METODO_DE_ENVIO}}</p>
                    <p>Número de Rastreamento: {{NUMERO_DE_RASTREAMENTO}}</p>
                    <p>Estimativa de Entrega: {{ESTIMATIVA_DE_ENTREGA}}</p>

                    <h2>Políticas e Informações Adicionais:</h2>
                    <p>Política de Devolução/Troca: {{POLITICA_DE_DEVOLUCAO}}</p>
                    <p>Informações de Contato: {{INFORMACOES_DE_CONTATO}}</p>

                    <p>Agradecemos por escolher a nossa loja!</p>
                </body>
                </html>";

        public static string EmailBodyTemplate(OrderDto orderDetails)
        {
            var productTable = string.Empty;

            var dictionary = orderDetails.Items.GroupBy(i => i.ProductId)
                        .ToDictionary(x => x.Key, i => i.ToList());

            decimal? subTotal = 0;

            foreach (var item in dictionary)
            {
                var totalPrice = item.Value.Sum(x => x.ProductPrice);
                subTotal += totalPrice;

                productTable += TABLE_WITH_PRODUCT_INFO
                                .Replace("##PRODUCTNAME##", item.Value.First().ProductName)
                                .Replace("##PRODUCTCOUNT##", item.Value.Count.ToString())
                                .Replace("##PRODUCTPRICE##", item.Value.First().ProductPrice.ToString())
                                .Replace("##TOTALPRICE##", totalPrice.ToString()) + "/n";
            }

            var orderTotalPrice = orderDetails.Freight.FreightValue + subTotal;

            var result = MAIN_EMAIL_BODY
                        .Replace("##USERNAME##", orderDetails.UserName)
                        .Replace("##ORDERNUMBER##", orderDetails.Id)
                        .Replace("##ORDERDATE##", orderDetails.OrderDate.ToString())
                        .Replace("##TABLE##", productTable)
                        .Replace("##SENDADDRESS##", orderDetails.Neighborhood)
                        .Replace("##USEREMAIL##", orderDetails.UserEmail)
                        .Replace("##USERPHONENUMBER##", orderDetails.PhoneNumber)
                        .Replace("##SUBTOTAL##", subTotal.ToString())
                        .Replace("##FREIGHT##", orderDetails.Freight.FreightValue.ToString())
                        .Replace("##ORDERTOTALPRICE##", orderTotalPrice.ToString());

            return result;
        }
    }
}
