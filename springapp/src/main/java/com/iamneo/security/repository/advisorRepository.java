package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.advisoraccount;

@Repository
public interface advisorRepository extends JpaRepository<advisoraccount,String>{
	

}
