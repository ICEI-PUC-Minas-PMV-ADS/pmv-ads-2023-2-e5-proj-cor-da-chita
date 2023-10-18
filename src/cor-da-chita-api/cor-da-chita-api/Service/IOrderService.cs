﻿using cor_da_chita_api.Models;

namespace cor_da_chita_api.Service
{
    public interface IOrderService
    {



        Task<List<OrderDto>> GetAsync();
        Task<OrderDto?> GetAsync(string id);
        Task CreateAsync(OrderDto newOrder);


        Task UpdateAsync(OrderDto orderToBeUpdated);



    }
}