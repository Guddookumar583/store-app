import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
background:transparent;
font-size:1.4rem;
border:0.05rem solid lightblue;
border-color:${props => props.cart?"yellow":"lightblue"};
cursor:pointer;
border-radius:5px;
margin:5px;
transition:all 0.5s ease-in-out;
&:hover{
    bacckground:blue;
    color:white;
}
`;

export const NavWrapper = styled.nav`
background:#4d4dff;

`;


export const ProductWrapper = styled.div`
        .card{
          border-color:transparent;
          transition:all 1s linear;
        }

        .card-footer{
          background:transparent;
          border-top:transparent;
          transition:all 1s linear;
        }
        &:hover{
          .card{
            border:0.04rem solid transparent;
            box-shadow:2px 2px 5px 5px rgba(0,0,0,0.2)
          }
          .card-footer{
            background:rgba(247,247,247);
          }
        }
        .img-container{
          position:relative;
          overflow:hidden;
        }
        .card-img-top{
          transition:all 1s linear;
        }
        .img-container:hover .card-img-top{
          transform:scale(1.2);
        }
        .cart-btn{
          position: absolute;
          bottom: 0;
          right: 0;
          padding:0.2rem 0.4rem;
          background:rgb(0, 153, 255);
          color:white;
          font-size:1.4rem;
          border-radius:0.5rem 0 0 0;
          transform:translate(100% , 100%);
        }
        .img-container:hover .cart-btn{
              transform:translate(0,0);
        }
        .cart-btn:hover{
          color:blue;
          cursor:pointer;
        }
`;


export const ModalConatainer = styled.div`
         position:fixed;
         top:0;
         left:0;
         right:0;
         bottom:0;
         background:rgba(0,0,0,0.3);
         display:flex;
         align-items:center;
         justify-content:center;
         #modal{
           background:white;
         }


`;