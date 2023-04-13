package com.inditex.zboost.service;

import com.inditex.zboost.entity.ReportSummary;
import com.inditex.zboost.repository.ProductRepository;
import com.inditex.zboost.repository.ReportSummaryRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ReportSummaryServiceImpl implements ReportSummaryService {

    private final ReportSummaryRepository reportSummaryRepository;

    private final ProductRepository productRepository;

    public ReportSummaryServiceImpl(ReportSummaryRepository reportSummaryRepository,
            ProductRepository productRepository) {
        this.reportSummaryRepository = reportSummaryRepository;
        this.productRepository = productRepository;
    }

    @Override
    public ReportSummary reportSummary() {
        /**
         * TODO: EXERCISE 3. Summarized report
         *
         * Check methods {@link ReportSummaryRepository#getReportSummary()} and
         * {@link ProductRepository#getTotalProductsByCategory}
         */
        ReportSummary reportSummary = this.reportSummaryRepository.getReportSummary();
        Map<String, Integer> totalProductsByCategory = this.productRepository.getTotalProductsByCategory();
        reportSummary.setTotalProductsByCategory(totalProductsByCategory);
        return reportSummary;
    }
}
