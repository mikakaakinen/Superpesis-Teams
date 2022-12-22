/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Header = () => {
    return (
        <header
            css={css`
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #ffcb05;
                padding: 1rem 0;
                &:before {
                    content: ' ';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    opacity: 0.3;
                    background-image: url('https://mika-kaakinen-baseball.s3.eu-north-1.amazonaws.com/superpesis.png');
                    background-repeat: no-repeat;
                    background-size: contain;
                }
            `}
        >
            <h1
                css={{
                    maxWidth: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                SUPERPESISJOUKKUEET 2020
            </h1>
        </header>
    );
};

export default Header;
