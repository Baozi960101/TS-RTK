import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #d1d5db;

  .headerContain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1024px) {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .logo {
    width: 100px;
    cursor: pointer;
  }

  .flexCenter {
    display: flex;
    align-items: center;
  }

  .svgStyle {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .userIcon {
    background-color: rgb(17 24 39);
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    width: 24px;
  }
`;

const Header = () => {
  const go = useNavigate();
  return (
    <header>
      <HeaderDiv>
        <div className="headerContain">
          <img
            className="logo"
            alt="instagram"
            src="/images/logo.svg"
            onClick={() => {
              go("/");
            }}
          ></img>
          <div className="flexCenter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svgStyle"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                go("/");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svgStyle"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                go("/following");
                // fetch('http://localhost:3004/posts/1', {
                //   method: 'PUT',
                //   body: JSON.stringify({ "title": "json-server", "author": "2222" }),
                //   headers: {
                //     'content-type': 'application/json'
                //   },
                // })
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="userIcon">B</div>
          </div>
        </div>
      </HeaderDiv>
    </header>
  );
};

export default Header;
