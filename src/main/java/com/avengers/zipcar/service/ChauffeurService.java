package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Chauffeur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChauffeurService {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Chauffeur> getAllChauffeurs() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_ALL_CHAUFFEURS");
        return call.executeFunction(List.class);
    }

    public void addChauffeur(Chauffeur chauffeur) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_CHAUFFEUR");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("first_name_ins", chauffeur.getFirstName())
                .addValue("last_name_ins", chauffeur.getLastName())
                .addValue("dl_no_ins", chauffeur.getDlNumber())
                .addValue("dl_expiry_date_ins", chauffeur.getExpiryDate())
                .addValue("dl_issuing_state_ins", chauffeur.getIssuingState());
        call.execute(paramMap);
    }

    public void deleteChauffeur(String employeeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_CHAUFFEUR_BY_EMPID");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", employeeId);
        call.execute(paramMap);
    }

    public void updateChauffeur (Chauffeur chauffeur, String employeeId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_CHAUFFEUR");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", employeeId)
                .addValue("first_name_ins", chauffeur.getFirstName())
                .addValue("last_name_ins", chauffeur.getLastName())
                .addValue("dl_no_ins", chauffeur.getDlNumber())
                .addValue("dl_expiry_date_ins", chauffeur.getExpiryDate())
                .addValue("dl_issuing_state_ins", chauffeur.getIssuingState());
        call.execute(paramMap);
    }

}
