/** @jsx jsx */
import { jsx } from '@emotion/core';

const Footer = () => {
    return (
        <header
            css={{
                textAlign: 'center',
                paddingTop: '0.75rem',
                paddingBottom: '0.5rem',
                fontFamily: 'Comfortaa, cursive',
                backgroundColor: '#ffcb05',
                width: '100%',
                maxWidth: '100%'
            }}
        >
            <h3>
                Made with
                <span
                    css={{
                        color: '#ff0000',
                    }}
                >
                    {' '}
                    &hearts;
                </span>{' '}
                in Riihim&auml;ki, Finland
            </h3>
        </header>
    );
};

export default Footer;
