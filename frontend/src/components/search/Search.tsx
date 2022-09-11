import React from 'react';
import style from './search.module.css'
import SearchSVG from "../../assets/svg/SearchSVG";
import {Input} from "../../ui/input/Input";

const Search = () => {
    return (
        <div className={style.wrapper}>
            <SearchSVG className={style.icon}/>

            <Input

            className={style.input}
            placeholder={'Search'}
            />
        </div>
    );
};

export default Search;
