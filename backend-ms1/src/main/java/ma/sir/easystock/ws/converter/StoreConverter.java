package  ma.sir.easystock.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.converter.AbstractConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.history.StoreHistory;
import ma.sir.easystock.bean.core.Store;
import ma.sir.easystock.ws.dto.StoreDto;

@Component
public class StoreConverter extends AbstractConverter<Store, StoreDto, StoreHistory> {


    public  StoreConverter(){
        super(Store.class, StoreDto.class, StoreHistory.class);
    }

    @Override
    public Store toItem(StoreDto dto) {
        if (dto == null) {
            return null;
        } else {
        Store item = new Store();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());


        return item;
        }
    }

    @Override
    public StoreDto toDto(Store item) {
        if (item == null) {
            return null;
        } else {
            StoreDto dto = new StoreDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
