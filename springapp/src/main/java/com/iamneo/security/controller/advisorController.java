package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.advisoraccount;
import com.iamneo.security.repository.advisorRepository;
import com.iamneo.security.service.advisorservice;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api")
public class advisorController {
	@Autowired
	advisorRepository aRepository;
//	@Autowired
//	advisorservice service;
	@PostMapping("/postvalue")
	public advisoraccount create(@RequestBody advisoraccount mov) {
	return aRepository.save(mov);
	}
	@GetMapping("/geta")
	public List<advisoraccount> getList(){
		return aRepository.findAll();
	}
	@GetMapping("/getvalues/{mailid}")
	public Optional<advisoraccount>getbyid(@PathVariable String mailid){
		return aRepository.findById(mailid);
	}

}
