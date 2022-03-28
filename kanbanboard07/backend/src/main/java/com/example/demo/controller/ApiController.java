package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.vo.CardVo;

@RestController
//@CrossOrigin(origins = {"http://localhost:9999"}, allowedHeaders = "*", allowCredentials="false", methods={RequestMethod.GET})
public class ApiController {

	@Autowired
	private CardRepository cardRepository;

	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(
			@RequestParam(value = "kw", required = true, defaultValue = "") String keyword) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(cardRepository.findAll(keyword)));
	}

	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody CardVo vo) {
		cardRepository.insert(vo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
	}

}