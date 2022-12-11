
import config from "../../config.json"
import styled from "styled-components";



const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    height: 230px;
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
    img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.user-info {
   display:flex ;
   align-items: center;
   width: 100%;
   padding: 16px 32px;
   gap: 16px;
}
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}


export default Header;