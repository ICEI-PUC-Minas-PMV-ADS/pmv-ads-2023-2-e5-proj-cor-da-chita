﻿using cor_da_chita_api.Models;
using cor_da_chita_api.Repository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace cor_da_chita_api.Service
{
    public class OrderService : IOrderService
    {
        public IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        /// <summary>
        /// Get All Orders
        /// </summary>

        /// <returns>List of Orders</returns>

        public async Task<List<OrderDto>> GetAllAsync()
        {

            
                return await _orderRepository.GetAllAsync();

            
           
        }
        /// <summary>
        /// Get All Orders
        /// </summary>
        /// <param name="id">Id of the order to be found </param>
        /// <returns>Order finded</returns>
        public async Task<OrderDto?> GetAsync(string id)
        {

            return await _orderRepository.GetAsync(id);
          
            

        }
        /// <summary>
        /// Get All Orders
        /// </summary>
        /// <param name="id">Id of the order to be found </param>
        /// <returns>Order finded</returns>
        public async Task<OrderDto?> CreateAsync(OrderDto newOrder)
        {

            var orderCreated =  await _orderRepository.CreateAsync(newOrder);
            return orderCreated;
        }
        /// <summary>
        /// Update Order
        /// </summary>
        /// <param name="Order">The entity order to be updated </param>
        /// <returns>Order Updated</returns>
        public async Task<OrderDto> UpdateAsync(OrderDto order)
        {
           
                var orderUpdated = await _orderRepository.UpdateAsync(order);
                return orderUpdated;
        

        }


        /// <summary>
        /// Delete Order
        /// </summary>
        /// <param name="id">Id of the order to be deleted</param>
       
        public async Task RemoveAsync(string id)
        {
          
               await _orderRepository.RemoveAsync(id);
            
          
        }


    }
}
