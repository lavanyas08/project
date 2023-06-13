package com.example.laptopDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.laptopDemo.model.BrandDetails;
import com.example.laptopDemo.model.Laptop;

@Repository
public interface BrandDetailsRepository extends JpaRepository<BrandDetails,Long> {

	@Query("select o from BrandDetails o where o.laptop=?1")
	BrandDetails getDetail(Laptop lap);
}
