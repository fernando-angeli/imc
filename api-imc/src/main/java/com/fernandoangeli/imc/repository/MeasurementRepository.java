package com.fernandoangeli.imc.repository;

import com.fernandoangeli.imc.domain.Measurement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MeasurementRepository extends CrudRepository<Measurement, Integer> {

    @Query(
            value = "SELECT * FROM i_measurements WHERE user_id = :idUsuario ORDER BY date",
            nativeQuery = true)
    List<Measurement> measurementFromUser(@Param(value = "idUsuario") Integer idUsuario);
}
