import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -10rem;


    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 30%;
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }


                strong {
                    display: block;
                    margin-top: 1rem;
                    font-size: 2rem;
                    font-weight: 500;
                    line-height: 3rem;
                }

                &.verde {
                    background-color: var(--green);
                    color: #FFF;
                }

        

    }

`;