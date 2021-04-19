
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';


const Pagina = ({limitPage, totalPage, pagina}) => {



const pageNumber = [];
for(let i = 1; i<=Math.ceil(totalPage/limitPage); i++){
    pageNumber.push(i);
}
    return (

        <Pagination  >
            <Pagination.First />
            <Pagination.Prev />


{pageNumber.map((number,i)=>{
    return(
        <Pagination.Item key={number} onClick={()=>pagina(number)}>{number}</Pagination.Item>
    )
})}

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>


    );
}
export default Pagina;


 /* <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{8}</Pagination.Item>
            <Pagination.Item>{9}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item> */