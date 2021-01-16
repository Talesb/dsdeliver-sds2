package com.talesb.devsuperior.dsdeliver.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.talesb.devsuperior.dsdeliver.dto.OrderDTO;
import com.talesb.devsuperior.dsdeliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderResources {

	@Autowired
	private OrderService orderService;

	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll() {
		List<OrderDTO> orders = this.orderService.findAll();
		return ResponseEntity.ok().body(orders);
	}

	@PostMapping
	public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO orderDTO) {
		OrderDTO order = this.orderService.insert(orderDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(orderDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(order);
	}

	@PutMapping("/{id}/delivered")
	public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id) {
		OrderDTO order = this.orderService.setDelivered(id);
		return ResponseEntity.ok().body(order);
	}

}