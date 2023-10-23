using System;
using System.Security.AccessControl;
using EmailSender;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Enviando email...");
            SendEmail.Send(""); // aqui vai a requisição com e-mail do usuário
            Console.WriteLine("E-mail enviado!");
        }
    }
}