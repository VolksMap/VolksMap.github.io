package br.gov.sp.etec.apietec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gov.sp.etec.apietec.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {
	
	public Login findByEmail(String email);
}
