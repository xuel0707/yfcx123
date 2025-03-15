package yfcx123.repository.rowmapper;

import io.r2dbc.spi.Row;
import java.time.ZonedDateTime;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;
import yfcx123.domain.AccountInfo;

/**
 * Converter between {@link Row} to {@link AccountInfo}, with proper type conversions.
 */
@Service
public class AccountInfoRowMapper implements BiFunction<Row, String, AccountInfo> {

    private final ColumnConverter converter;

    public AccountInfoRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link AccountInfo} stored in the database.
     */
    @Override
    public AccountInfo apply(Row row, String prefix) {
        AccountInfo entity = new AccountInfo();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setAccountId(converter.fromRow(row, prefix + "_account_id", Integer.class));
        entity.setCompanyName(converter.fromRow(row, prefix + "_company_name", String.class));
        entity.setSocialCreditCode(converter.fromRow(row, prefix + "_social_credit_code", String.class));
        entity.setEntityLegalPerson(converter.fromRow(row, prefix + "_entity_legal_person", String.class));
        entity.setPassword(converter.fromRow(row, prefix + "_password", String.class));
        entity.setFullyAddress(converter.fromRow(row, prefix + "_fully_address", String.class));
        entity.setCompanyContact(converter.fromRow(row, prefix + "_company_contact", String.class));
        entity.setMobileNumber(converter.fromRow(row, prefix + "_mobile_number", String.class));
        entity.setAccountStatus(converter.fromRow(row, prefix + "_account_status", Integer.class));
        entity.setCreateTime(converter.fromRow(row, prefix + "_create_time", ZonedDateTime.class));
        entity.setUpdateTime(converter.fromRow(row, prefix + "_update_time", ZonedDateTime.class));
        return entity;
    }
}
