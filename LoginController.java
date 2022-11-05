package br.gov.sp.etec.apietec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import br.gov.sp.etec.apietec.model.Login;
import br.gov.sp.etec.apietec.repository.LoginRepository;


@Controller
public class LoginController {
	
	@Autowired
	LoginRepository repository;
	
	@GetMapping("/index")
	public String home() {
		return "home";
	}
	
	
	@GetMapping("/cadastro") 
	public String cadastro() {
		return "registro";
	}
	
	@GetMapping("/logar")
	public String logar(Login login) {
		Login loginBD = repository.findByEmail(login.getEmail());
		
		if (loginBD != null && loginBD.getSenha().equals(login.getSenha())) {
			return "index";
		} else {
			return "erro";
		}
	}
		
	@PostMapping("/salvar")
	public String salvar(Login login) {
		repository.save(login);
		
	
		return "login";
		
	}
}
