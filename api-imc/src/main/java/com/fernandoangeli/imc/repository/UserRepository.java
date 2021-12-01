package com.fernandoangeli.imc.repository;

import com.fernandoangeli.imc.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByEmail(String email);
}
