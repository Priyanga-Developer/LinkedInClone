import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/home-logo.svg'
import searchIcon from "../assets/search-icon.svg"
import homeIcon from "../assets/nav-home.svg"
import networkIcon from "../assets/nav-network.svg"
import jobsIcon from "../assets/nav-jobs.svg"
import notifyIcon from "../assets/nav-notifications.svg"
import messageIcon from "../assets/nav-messaging.svg"

const Header = (props) => {
  const listItems=[
    {
       id:1,
       path:"",
       src:homeIcon,
       content:"Home"

    },
    {
      id:2,
      path:"",
      src:networkIcon,
      content:" My Network"
    },
    {
      id:3,
      path:"",
      src:jobsIcon,
      content:"Jobs"

    },
    {
      id:4,
      path:"",
      src:messageIcon,
      content:"Messaging"
    },
    {
      id:5,
      path:"",
      src:notifyIcon,
      content:"Notifications"
    }]

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/Home">
            <img src={logo} alt='logo' />
          </Link>
        </Logo>
          <Search>
            <div>
               <input type="text" placeholder="Search" />
            </div>
            <SearchIcon>
              <img src={searchIcon} alt="ssgsghf" />
            </SearchIcon>
          </Search>
          <Nav>
               <NavListWrap>
                    {listItems.map((items)=>
                    <NavList key={items.id}>
                    <Link to={items.path}>
                    <img src={items.src} alt="homeIcon" />
                    </Link>
                    <span>{items.content}</span>   
                  </NavList>
                    )}
               </NavListWrap>
          </Nav>
        </Content>
    </Container>
  )
}
const Container =styled.div`
   background-color:white;
   border-bottom:1px solid rgba(0,0,0,0.08);
   left:0;
   padding:0 24px;
   position:fixed;
   top:0;
   width:100vw;
   z-index:100;
`;
const Content =styled.div `
    display:flex;
    align-items:center;
    margin:0 auto;
    min-height:100%;
    max-width: 1128px;
`;
const Logo =styled.span`
margin-right:8px;
font-size:0px;
`;

const Search =styled.div`
opacity:1;
flex-grow:1;
position:relative;
&>div{
  max-width: 280px;
  input{
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
}

`;
const SearchIcon=styled.div`
  width:40px;
  position:absolute;
  z-index:1;
  top:10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Nav =styled.nav`
    margin-left: auto;
    display: block;
@media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
    display:flex;
    flex-wrap:nowrap;
    list-style-type:none;


`;
const NavList =styled.li`
display:flex;
align-items:center;
flex-direction:column;
a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

      @media (max-width:768px) {
     min-width:70px;
  
  }
}

span{
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:13px;
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }


`;



export default Header