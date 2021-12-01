package com.fernandoangeli.imc.mapper;

import com.fernandoangeli.imc.domain.Measurement;
import com.fernandoangeli.imc.representation.request.MeasurementRequest;
import com.fernandoangeli.imc.representation.response.MeasurementResponse;
import org.modelmapper.ModelMapper;

public class MeasurementMapper {

    public static ModelMapper mapper = new ModelMapper();

    public static Measurement toMeasurementDomain(MeasurementRequest request){
        return mapper.map(request, Measurement.class);
    }

    public static MeasurementResponse toMeasurementResponse(Measurement measurement){
        return mapper.map(measurement, MeasurementResponse.class);
    }
}
