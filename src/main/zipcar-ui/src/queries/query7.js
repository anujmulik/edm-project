export const query7Text = `/* Amount saved by an account through promotional codes and plans. */

WITH ALL_VALUES AS
         (select a.account_id
               ,b.BOOKING_ID
               ,p.DISCOUNT_TYPE
               ,p.DISCOUNT_VALUE
               ,b.PROMOCODE
               ,b.BASE_BOOKING_AMOUNT
               ,case p.DISCOUNT_TYPE
                    WHEN 'ABS'
                        THEN to_number(P.DISCOUNT_VALUE)
                    WHEN 'PER'
                        THEN B.BASE_BOOKING_AMOUNT * (to_number(p.DISCOUNT_VALUE)/100)
                 END as "discount_after_plan"
               ,case p.DISCOUNT_TYPE
                    WHEN 'ABS'
                        THEN B.BASE_BOOKING_AMOUNT - to_number(P.DISCOUNT_VALUE)
                    WHEN 'PER'
                        THEN B.BASE_BOOKING_AMOUNT * (1-(to_number(p.DISCOUNT_VALUE)/100))
                 END as "amount_after_disc"
          from accounts a, plans p, BOOKINGS b
          where a.PLAN_ID = p.PLAN_ID
            and b.ACCOUNT_ID = a.ACCOUNT_ID
          order by b.ACCOUNT_ID)


select account_id, sum(BASE_BOOKING_AMOUNT) "Total Base Booking Amount"
     , round(sum("discount_after_plan"), 2) "Total Plan Discount"
     , round(sum("discount_on_promo"), 2) "Total Promocode Discount"
     , round(sum("total_discount"), 2) "Total Savings"
from(
        select av.ACCOUNT_ID
             ,av.BOOKING_ID
             ,av.BASE_BOOKING_AMOUNT
             ,av."discount_after_plan"
             ,case p.DISCOUNT_TYPE
                  WHEN 'ABS'
                      THEN TO_NUMBER(p.DISCOUNT_VALUE)
                  WHEN 'PER'
                      THEN av."amount_after_disc" * (to_number(p.DISCOUNT_VALUE)/100)
                  ELSE
                      0
            end as "discount_on_promo"
             ,av."discount_after_plan" + case p.DISCOUNT_TYPE
                                             WHEN 'ABS'
                                                 THEN TO_NUMBER(p.DISCOUNT_VALUE)
                                             WHEN 'PER'
                                                 THEN av."amount_after_disc" * (to_number(p.DISCOUNT_VALUE)/100)
                                             ELSE
                                                 0
            end as "total_discount"
        from ALL_VALUES av left outer join PROMOTIONS p
                                           on av.PROMOCODE = p.PROMOCODE)
group by account_id
order by ACCOUNT_ID
;`;