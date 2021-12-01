package com.fernandoangeli.imc.controller;

import com.fernandoangeli.imc.representation.request.MeasurementRequest;
import com.fernandoangeli.imc.representation.response.MeasurementResponse;
import com.fernandoangeli.imc.service.MeasurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("privado/usuario/")
public class MeasurementController {

    @Autowired
    private MeasurementService service;

    @PostMapping("medicao")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void registerMeasurement(@Valid @RequestBody MeasurementRequest request){
        service.registerMeasurement(request);
    }

    @GetMapping("medicao/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<MeasurementResponse> listMeasurements(@Valid @PathVariable Integer id){
        return service.listMeasurements(id);
    }

    @DeleteMapping("medicao/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteMeasurement(@Valid @PathVariable Integer id){
        service.deleteMeasurement(id);
    }
}
