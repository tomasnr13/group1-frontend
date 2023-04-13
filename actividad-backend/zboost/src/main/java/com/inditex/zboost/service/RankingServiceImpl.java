package com.inditex.zboost.service;

import com.inditex.zboost.entity.*;
import com.inditex.zboost.utils.Converters;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Function;
import java.util.function.ToDoubleFunction;
import java.util.stream.Collectors;

import static com.inditex.zboost.utils.Converters.toProductRank;

@Service
public class RankingServiceImpl implements RankingService {
    private final OrderService orderService;

    public RankingServiceImpl(OrderService orderService) {
        this.orderService = orderService;
    }

    @Override
    public Ranking ranking(RankingType rankingType, Date fromDate, Date toDate) {

        /**
         * TODO: EXERCISE 4. Ranking Implementation
         *
         * So far we have been solving exercises mainly by throwing SQL queries against
         * our database. We think it's time to
         * see your programming skills, so this exercise should be solved purely
         * programmatically without making any direct
         * queries against the DB ;)
         *
         * HINTS:
         * 1- Do not create new methods, the exercise can be solved using only the
         * injected {@link OrderService}.
         * 2- To help you in the exercise, use the
         * {@link OrderService#findOrdersBetweenDates(Date, Date)} method already
         * implemented to retrieve those orders placed between two dates.
         * 3- You can also use the {@link OrderService#findOrderDetail(long)} method
         * that you have implemented to retrieve
         * the details of an order.
         * 4- You can use the utility methods
         * {@link com.inditex.zboost.utils.Converters#toProductRank(Product)} and
         * {@link com.inditex.zboost.utils.Converters#toProduct(ProductOrderItem)} to
         * map the basic fields of a product
         * between the types {@link Product}, {@link ProductOrderItem}, and
         * {@link ProductRank}.
         * 5- Remember that {@link ProductOrderItem} is an extension of {@link Product},
         * which has implemented the hashcode
         * method that can be very useful ;)
         *
         * BONUS TRACK: The resolution of the exercise using the Java Streams API will
         * be positively valued.
         *
         * https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/package-summary.html
         * https://www.baeldung.com/java-8-streams
         */
        return new Ranking();
    }

}
