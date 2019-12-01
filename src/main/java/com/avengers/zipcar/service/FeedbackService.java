package com.avengers.zipcar.service;

import com.avengers.zipcar.entity.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Feedback> getAllFeedbacks() {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FEEDBACKS");
        return call.executeFunction(List.class);
    }

    public List<Feedback> getFeedbackByAccount(String accountId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withFunctionName("GET_FEEDBACK_BY_ACC");
        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("accountId", accountId);
        return call.executeFunction(List.class, paramMap);
    }

    public void addFeedback(Feedback feedback) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("INSERT_INTO_FEEDBACK");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("feedback_text_ins", feedback.getFeedbackText())
                .addValue("category_ins", feedback.getCategory())
                .addValue("rating_ins", feedback.getRating())
                .addValue("account_id_ins", feedback.getAccountId());
        call.execute(paramMap);
    }

    public void deleteFeedback(String feedbackId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("DELETE_FEEDBACK_BY_FEEDBACKID");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("feedback_id_ins", feedbackId);
        call.execute(paramMap);
    }

    public void updateFeedback (Feedback feedback, String feedbackId) {
        SimpleJdbcCall call =
                new SimpleJdbcCall(jdbcTemplate).withProcedureName("UPDATE_FEEDBACK");

        SqlParameterSource paramMap = new MapSqlParameterSource()
                .addValue("employee_id_ins", feedbackId)
                .addValue("feedback_text_ins", feedback.getFeedbackText())
                .addValue("category_ins", feedback.getCategory())
                .addValue("rating_ins", feedback.getRating())
                .addValue("account_id_ins", feedback.getAccountId());
        call.execute(paramMap);
    }

}
