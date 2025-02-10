package yfcx123.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Table;

public class AccountInfoSqlHelper {

    public static List<Expression> getColumns(Table table, String columnPrefix) {
        List<Expression> columns = new ArrayList<>();
        columns.add(Column.aliased("id", table, columnPrefix + "_id"));
        columns.add(Column.aliased("account_id", table, columnPrefix + "_account_id"));
        columns.add(Column.aliased("company_name", table, columnPrefix + "_company_name"));
        columns.add(Column.aliased("social_credit_code", table, columnPrefix + "_social_credit_code"));
        columns.add(Column.aliased("entity_legal_person", table, columnPrefix + "_entity_legal_person"));
        columns.add(Column.aliased("password", table, columnPrefix + "_password"));
        columns.add(Column.aliased("fully_address", table, columnPrefix + "_fully_address"));
        columns.add(Column.aliased("company_contact", table, columnPrefix + "_company_contact"));
        columns.add(Column.aliased("mobile_number", table, columnPrefix + "_mobile_number"));
        columns.add(Column.aliased("account_status", table, columnPrefix + "_account_status"));
        columns.add(Column.aliased("create_time", table, columnPrefix + "_create_time"));
        columns.add(Column.aliased("update_time", table, columnPrefix + "_update_time"));

        return columns;
    }
}
