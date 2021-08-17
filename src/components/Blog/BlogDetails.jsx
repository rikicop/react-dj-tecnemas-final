import { useParams,useHistory } from "react-router";
import useFetch from './useFetch';

import {Container,Footer, Content, Navbar, 
    Sidebar,Titulo,ImgContainer,Imagen,
    SocialMediaWrap,SocialIconLink, SocialIcons,
    LeftNavTitle, RightNavTitle,NavBtnLink} from './BlogDetElements';


import {FaFacebook,FaInstagram} from 'react-icons/fa';

 const BlogDetails = () => {
     const {id} = useParams();
     const { data:blog , error, isPending} = useFetch('https://fotalora.pythonanywhere.com/api/'+ id)
     
     let history = useHistory();

     function HandleHistory(){
      history.push('/');
      window.location.reload() 
     }
     
     
    return (
        <div>
            {isPending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
              <>
                 <Container>
                 <Navbar>
                   <LeftNavTitle>Blog </LeftNavTitle>
                   <RightNavTitle>
                     <NavBtnLink onClick={HandleHistory}>Tecnemas</NavBtnLink>
                   </RightNavTitle>
                 </Navbar>
                   <Titulo> 
                     {blog.title}
                   </Titulo>
                   <Sidebar>{blog.fecha} <br /> {blog.author}</Sidebar>
                   <ImgContainer>
                     <Imagen src={blog.foto} alt=""/>
                   </ImgContainer>
                   
                   <Content dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
                    
                   <Footer>
                   <SocialMediaWrap>
                   <SocialIcons>
                      
                        <b>{blog.author}</b>
                      
                       <SocialIconLink href={blog.lnk_face} target="_blank" aria-label="Facebook">
                         <FaFacebook />
                       </SocialIconLink>
                       <SocialIconLink href={blog.lnk_insta} target="_blank" aria-label="Instagram">
                         <FaInstagram />
                       </SocialIconLink>
                     </SocialIcons>
                     </SocialMediaWrap>
                   </Footer>
                 </Container>
                 </>
            )}
        </div>
    )
}

export default BlogDetails