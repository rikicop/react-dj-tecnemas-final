import React from 'react'
import { ServicesCard, 
         ServicesContainer,
         ServicesH1, 
         ServicesH2, 
         ServicesIcon, 
         ServicesP, 
         ServicesWrapper,ServicesLink
         } from './ServicesElements'

import useFetch from './useFetch';


const Services = () => {
    const {data : blogs, isPending, error} = useFetch('https://fotalora.pythonanywhere.com/api/')
    

    return (
        <>
        {error && <div style={{color:'red'}}> {error} </div>}
        {isPending && <div> Cargando... </div> }
        
        <ServicesContainer id="servicios">
            <ServicesH1>Publicaciones</ServicesH1>
            <ServicesWrapper>
            { blogs && blogs.map((blog, i)=>{
              if (i >= blogs.length - 3) {
                return (
                  <ServicesLink to={`/api/${blog.id}`} key={blog.id}>
                    <ServicesCard>
                        <ServicesIcon src={blog.foto}/>
                        <ServicesH2>{blog.title}</ServicesH2>
                        <ServicesP>{blog.description}</ServicesP>
                    </ServicesCard>
                  </ServicesLink>)
              }else{
                return null
              }
            })}  
            </ServicesWrapper>   
        </ServicesContainer>
       
        </>
    )
}

export default Services