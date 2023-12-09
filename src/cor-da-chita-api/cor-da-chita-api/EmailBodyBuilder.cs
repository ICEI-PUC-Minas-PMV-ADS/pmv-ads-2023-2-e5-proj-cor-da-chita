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
                </tr>";

        private static string MAIN_EMAIL_BODY = @"
            <!DOCTYPE html>
                <html lang=""en"">
                <head>
                    <meta charset=""UTF-8"">
                    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                    <title>Confirmação de Pedido</title>
                    <style>
                        body {
                            font-family: 'Arial', sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }

                        h1, h2, h3 {
                            color: #009688;
                        }

                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 15px;
                            table-layout: auto;
                        }

                        th, td {
                            border: 1px solid #ddd;
                            padding: 8px;
                            text-align: left;
                            width: auto;
                        }

                        th {
                            background-color: #009688;
                            color: #fff;
                        }

                        p {
                            margin-bottom: 10px;
                        }

                        .summary {
                            font-weight: bold;
                        }
                        
                    </style>
                </head>
                <body>
                    <h1>Olá <strong>##USERNAME##</strong>,</h1>

                    <p>O pedido de numero <strong>##ORDERNUMBER##</strong>, feito em <strong>##ORDERDATE##</strong>, está sendo processado.</p>

                    <h2>Detalhes do Pedido:</h2>
                    <table>
                        ##TABLE##
                    </table>

                    <h2>Informações do Cliente:</h2>
                    <p><strong>Nome:</strong> ##USERNAME##</p>
                    <p><strong>Endereço:</strong></p>
                    <ul style=""list-style-type: none; padding: 0; margin: 0; text-indent: 20px;"">
                        <li>##SENDSTREET##, ##SENDNUMBER##, ##SENDNEIGHBORHOOD##</a></li>
                        <li>CEP: ##SENDCEP##</li>
                        <li>##SENDCITY##, ##SENDSTATE##</li>
                        <li>##SENDCOMPLEMENT##</li>
                        <!-- Add more information as needed -->
                    </ul>
                    <p><strong>E-mail:</strong> ##USEREMAIL##</p>
                    <p><strong>Telefone:</strong> ##USERPHONENUMBER##</p>

                    <h2>Resumo Financeiro:</h2>
                    <p><strong>Subtotal:</strong> ##SUBTOTAL## </p>
                    <p><strong>Taxas de Envio:</strong> ##FREIGHT##</p>
                    <p><strong>Total do Pedido:</strong> ##ORDERTOTALPRICE##</p>

                    <h2>Informações de Envio:</h2>
                    <p><strong>Método de Envio:</strong> ##METODO_DE_ENVIO##</p>

                    <h2>Políticas e Informações Adicionais:</h2>
                    <p><strong>Política de Devolução/Troca:</strong> De acordo com o Código de Defesa do Consumidor, você tem até 7 (sete) dias para desistir das compras feitas pela Internet. Para devolução, é só entrar em contato através dos nossos canais (WhatsApp, e-mail e Direct do Instagram).</p>
                    <p><strong>Informações de Contato:</strong></p>
                    <ul style=""list-style-type: none; padding: 0; margin: 0; text-indent: 20px;"">
                        <li><strong>Instagram:</strong><a href=""https://www.instagram.com/cor.da.chita/""> @cor.da.chita</a></li>
                        <li><strong>Email:</strong> feitosamadriana@gmail.com</li>
                        <li><strong>Telefone e Whatsapp:</strong> (83) 98726-1972</li>
                        <!-- Add more information as needed -->
                    </ul>
                    <p> Pedimos que entre em contato por algum dos meios acima, para envio do comprovante de pagamento e recebimento do código de rastreio.</p>

                    <h3>Agradecemos por escolher a nossa loja!</h3>
                </body>
                </html>";

        public static string EmailBodyTemplate(OrderDto orderDetails)
        {
            // var productTable = string.Empty;
            var productTable = TABLE_WITH_PRODUCT_INFO;

            var dictionary = orderDetails.Items.GroupBy(i => i.ProductId)
                        .ToDictionary(x => x.Key, i => i.ToList());

            decimal? subTotal = 0;

            foreach (var item in dictionary)
            {
                var totalPrice = item.Value.Sum(x => x.ProductPrice);
                subTotal += totalPrice;

                // Append the table rows for each item
                productTable += $@"
                    <tr>
                        <td>{item.Value.First().ProductName}</td>
                        <td>{item.Value.Count}</td>
                        <td>{item.Value.First().ProductPrice}</td>
                        <td>{totalPrice}</td>
                    </tr>";
            }
            
            
            // foreach (var item in dictionary)
            // {
            //     var totalPrice = item.Value.Sum(x => x.ProductPrice);
            //     subTotal += totalPrice;

            //     productTable += TABLE_WITH_PRODUCT_INFO
            //                     .Replace("##PRODUCTNAME##", item.Value.First().ProductName)
            //                     .Replace("##PRODUCTCOUNT##", item.Value.Count.ToString())
            //                     .Replace("##PRODUCTPRICE##", item.Value.First().ProductPrice.ToString())
            //                     //.Replace("##TOTALPRICE##", totalPrice.ToString()) + "/n";
            //                     .Replace("##TOTALPRICE##", totalPrice.ToString());
            // }

            var orderTotalPrice = orderDetails.Freight.FreightValue + subTotal;

            var freightMethod = orderDetails.Freight.FreightMethod;

            var result = MAIN_EMAIL_BODY
                        .Replace("##USERNAME##", orderDetails.UserName)
                        .Replace("##ORDERNUMBER##", orderDetails.OrderNumber.ToString())
                        .Replace("##ORDERDATE##", orderDetails.OrderDate.ToString())
                        .Replace("##TABLE##", productTable)
                        .Replace("##SENDSTREET##", orderDetails.Street)
                        .Replace("##SENDNUMBER##", orderDetails.Num)
                        .Replace("##SENDNEIGHBORHOOD##", orderDetails.Neighborhood)
                        .Replace("##SENDCEP##", orderDetails.CEP)
                        .Replace("##SENDCITY##", orderDetails.City)
                        .Replace("##SENDSTATE##", orderDetails.UF)
                        .Replace("##SENDCOMPLEMENT##", orderDetails.Complement)
                        .Replace("##USEREMAIL##", orderDetails.UserEmail)
                        .Replace("##USERPHONENUMBER##", orderDetails.PhoneNumber)
                        .Replace("##SUBTOTAL##", subTotal.ToString())
                        .Replace("##FREIGHT##", orderDetails.Freight.FreightValue.ToString())
                        .Replace("##ORDERTOTALPRICE##", orderTotalPrice.ToString())
                        .Replace("##METODO_DE_ENVIO##", freightMethod.ToString());

            return result;
        }
    }
}
