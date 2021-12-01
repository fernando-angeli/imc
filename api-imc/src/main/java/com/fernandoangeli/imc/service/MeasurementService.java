package com.fernandoangeli.imc.service;

import com.fernandoangeli.imc.domain.Measurement;
import com.fernandoangeli.imc.mapper.MeasurementMapper;
import com.fernandoangeli.imc.repository.MeasurementRepository;
import com.fernandoangeli.imc.representation.request.MeasurementRequest;
import com.fernandoangeli.imc.representation.response.MeasurementResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.fernandoangeli.imc.mapper.MeasurementMapper.toMeasurementDomain;

@Service
public class MeasurementService {

    @Autowired
    private MeasurementRepository repository;

    public void registerMeasurement(MeasurementRequest request) {
        Measurement measurement = toMeasurementDomain(request);
        repository.save(measurement);
    }

    public List<MeasurementResponse> listMeasurements(Integer id) {
        List<Measurement> list = repository.measurementFromUser(id);
        return list.stream().map(MeasurementMapper::toMeasurementResponse).collect(Collectors.toList());
    }

    public void deleteMeasurement(Integer id) {
        repository.deleteById(id);
    }
}
