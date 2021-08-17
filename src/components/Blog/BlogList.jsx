import { Link } from "react-router-dom";
/* import "./Card.scss" */
import {Container,Navbar,Wrapper,Card,CardImage,
        CardTitle,CardBtn, GlobalStyle, 
        LeftNavTitle, RightNavTitle, NavBtnLink} from './CardElements';

import { useHistory } from "react-router";


const BlogList = ({ blogs }) => {
    let history = useHistory();
    function HandleHistory(){
        history.push('/');
        window.location.reload() 
    }
    return (
    <>  
        <GlobalStyle/>
        <Container>
            <Navbar>
            <LeftNavTitle>Blogs </LeftNavTitle>
                   <RightNavTitle>
                     <NavBtnLink onClick={HandleHistory}>Tecnemas</NavBtnLink>
                   </RightNavTitle>
            </Navbar>
            <Wrapper>
                {
                    blogs.map(blog => (
                        <Card key={blog.id}>
                            <div>
                                <CardImage src={blog.foto} alt="comida"/>
                                <CardTitle>{blog.title}</CardTitle>
                            </div>
                            <Link to={`/api/${blog.id}`}>
                                <CardBtn>Ver Publicación</CardBtn>
                            </Link>
                        </Card>
                    ))}
            </Wrapper>
        </Container>
    </>
    )
}

export default BlogList
