package com.inditex.zboost.repository;

import com.inditex.zboost.entity.Order;
import com.inditex.zboost.entity.OrderDetail;
import com.inditex.zboost.exception.NotFoundException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class OrderRepositoryImpl extends BaseRepository<Order> implements OrderRepository {

    public OrderRepositoryImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        super(jdbcTemplate);
    }

    @Override
    public List<Order> getOrders(int limit) {

        /*
         * TODO: EXERCISE 2.a) Retrieve a list of the last N orders (remember to sort by
         * date)
         */
        return List.of();
    }

    @Override
    public List<Order> getOrdersBetweenDates(Date fromDate, Date toDate) {
        Map<String, Object> params = new HashMap<>();
        params.put("startDate", new java.sql.Date(fromDate.getTime()));
        params.put("toDate", new java.sql.Date(toDate.getTime()));
        String sql = """
                SELECT id, date, status
                FROM Orders
                WHERE date BETWEEN :startDate AND :toDate
                """;

        return this.query(sql, params, Order.class);
    }

    @Override
    public OrderDetail getOrderDetail(long orderId) {

        /*
         * TODO: EXERCISE 2.b) Retrieve the details of an order given its ID
         *
         * Remember that, if an order is not found by its ID, you must notify it
         * properly as indicated in the contract
         * you are implementing (HTTP status code 404 Not Found). For this,
         * you can use the exception {@link
         * com.inditex.zboost.exception.NotFoundException}
         */
        return new OrderDetail();
    }
}
