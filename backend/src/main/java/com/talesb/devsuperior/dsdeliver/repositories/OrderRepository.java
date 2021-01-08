package com.talesb.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talesb.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
