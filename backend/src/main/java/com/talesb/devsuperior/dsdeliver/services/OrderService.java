package com.talesb.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talesb.devsuperior.dsdeliver.dto.OrderDTO;
import com.talesb.devsuperior.dsdeliver.dto.ProductDTO;
import com.talesb.devsuperior.dsdeliver.entities.Order;
import com.talesb.devsuperior.dsdeliver.entities.OrderStatus;
import com.talesb.devsuperior.dsdeliver.entities.Product;
import com.talesb.devsuperior.dsdeliver.repositories.OrderRepository;
import com.talesb.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		return this.orderRepository.findOrdersWithProducts().stream().map(orderEntity -> new OrderDTO(orderEntity))
				.collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO orderDTO) {
		Order order = new Order(orderDTO);

//		order.getProducts().stream()
//		.forEach(p -> {
//			Product product = productRepository.getOne(p.getId());
//			order.getProducts().add(product);
//		});
//		
		for (ProductDTO p : orderDTO.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}

		order = orderRepository.save(order);
		return new OrderDTO(order);
	}

	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = orderRepository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}

}
